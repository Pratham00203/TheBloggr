const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const md5 = require("md5");
const db = require("../db/db");
const auth = require("../middleware/auth");

// @route GET /users/me
// @description Get current User Profile
// @access Private
router.get("/me", auth, async (req, res) => {
  try {
    let check = await db.query("SELECT * FROM USERS WHERE userid=$1", [
      req.user.userid,
    ]);
    if (check.rows.length !== 0) {
      let user = await db.query("SELECT * FROM USERS WHERE userid=$1", [
        req.user.userid,
      ]);
      let blogs = await db.query("SELECT * FROM BLOGS WHERE userid=$1", [
        req.user.userid,
      ]);
      let followers = await db.query(
        "SELECT * FROM FOLLOWS WHERE following_id = $1",
        [req.user.userid]
      );
      let following = await db.query(
        "SELECT * FROM FOLLOWS WHERE follower_id = $1",
        [req.user.userid]
      );

      res.json({
        userDetails: {
          name: user.rows[0].name,
          bio: user.rows[0].bio,
          profile_img: user.rows[0].profile_img,
        },
        blogs: blogs.rows,
        followers: followers.rows,
        following: following.rows,
      });
    } else {
      res.json("User doesn't exists");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET /users/:userid
// @description Get a User's Profile
// @access Public
router.get("/:userid", auth, async (req, res) => {
  let followStatus = false;
  try {
    let user = await db.query("SELECT * FROM USERS WHERE userid=$1", [
      req.params.userid,
    ]);
    let blogs = await db.query("SELECT * FROM BLOGS WHERE userid=$1", [
      req.params.userid,
    ]);

    let followCheck = await db.query(
      "SELECT * FROM FOLLOWS WHERE follower_id=$1 AND following_id=$2",
      [req.user.userid, req.params.userid]
    );

    if (followCheck.rows.length !== 0) {
      followStatus = true;
    }
    res.json({
      userDetails: {
        name: user.rows[0].name,
        bio: user.rows[0].bio,
        profile_img: user.rows[0].profile_img,
      },
      followStatus: followStatus,
      blogs: blogs.rows,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT /users/me/update
// @description update current User Profile
// @access Private
router.put(
  "/me/update",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Enter a Valid Email Id").isEmail(),
      check("password", "Enter a Password with 6 or more characters").isLength({
        min: 6,
      }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If the errors array is not empty set status 400:Bad request and give the error messages in json
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Get the details of the user
    try {
      const { name, email, password, bio, profile_img } = req.body;

      let newPassword = md5(password);
      let check = await db.query("SELECT * FROM USERS WHERE userid=$1", [
        req.user.userid,
      ]);
      if (check.rows.length !== 0) {
        let results = await db.query(
          "UPDATE USERS SET name=$1, email=$2, password=$3, bio=$4, profile_img=$5 WHERE userid=$6 RETURNING *",
          [name, email, newPassword, bio, profile_img, req.user.userid]
        );

        res.json(results.rows[0]);
      } else {
        res.json("User doesn't Exists");
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route DELETE /users/me/delete
// @description Delete current User Profile
// @access Private
router.delete("/me/delete", auth, async (req, res) => {
  try {
    let results = await db.query("DELETE FROM LIKES WHERE userid=$1", [
      req.user.userid,
    ]);
    // results = await db.query(
    //   "DELETE FROM FOLLOWS WHERE follower_id=$1 OR following_id=$2",
    //   [req.user.userid, req.user.userid]
    // );
    results = await db.query("DELETE FROM COMMENTS WHERE userid=$1", [
      req.user.userid,
    ]);

    await db.query("DELETE FROM BLOGS WHERE userid=$1", [req.user.userid]);
    await db.query("DELETE FROM USERS WHERE userid=$1", [req.user.userid]);
    res.json("User Deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST /follow/:userid
// @description Follow a user
// @access Private
router.post("/follow/:userid", auth, async (req, res) => {
  try {
    if (req.params.userid != req.user.userid) {
      let followingPersonUserName = await db.query(
        "SELECT * FROM USERS WHERE userid=$1",
        [req.params.userid]
      );

      let loggedUserName = await await db.query(
        "SELECT * FROM USERS WHERE userid=$1",
        [req.user.userid]
      );

      let check = await db.query(
        "SELECT * FROM FOLLOWS WHERE follower_id=$1 AND following_id=$2",
        [req.user.userid, req.params.userid]
      );
      if (check.rows.length === 0) {
        let results = await db.query(
          "INSERT INTO FOLLOWS (follower_id,following_id,follower_name,following_name) VALUES ($1,$2,$3,$4) RETURNING *",
          [
            req.user.userid,
            req.params.userid,
            loggedUserName.rows[0].name,
            followingPersonUserName.rows[0].name,
          ]
        );

        res.json("Followed");
      } else {
        res.json("Already Followed");
      }
    } else {
      res.json("You can't Follow yourself");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST /unfollow/:userid
// @description Unfollow a user
// @access Private
router.post("/unfollow/:userid", auth, async (req, res) => {
  try {
    let check = await db.query(
      "SELECT * FROM FOLLOWS WHERE follower_id=$1 AND following_id=$2",
      [req.user.userid, req.params.userid]
    );
    if (check.rows.length !== 0) {
      await db.query(
        "DELETE FROM FOLLOWS WHERE follower_id=$1 AND following_id=$2",
        [req.user.userid, req.params.userid]
      );

      res.json("Unfollowed");
    } else {
      res.json("Already Unfollowed");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT /me/reset-password
// @description Reset Password
// @access Public
router.put(
  "/me/reset-password",
  [
    check("password", "Enter a Password with 6 or more characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If the errors array is not empty set status 400:Bad request and give the error messages in json
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      let check = await db.query("SELECT * FROM USERS WHERE email=$1", [email]);
      if (check.rows.length !== 0) {
        let newPassword = md5(password);

        await db.query("UPDATE USERS SET password=$1 WHERE email=$2", [
          newPassword,
          email,
        ]);

        res.json("Updated the password");
      } else {
        res.json("User doesn't exists");
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
