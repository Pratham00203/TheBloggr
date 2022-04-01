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
    let user = await db.query("SELECT (name,bio) FROM USERS WHERE userid=$1", [
      req.user.userid,
    ]);
    let blogs = await db.query("SELECT * FROM BLOGS WHERE userid=$1", [
      req.user.userid,
    ]);

    res.json({
      userDetails: {
        name: user.rows[0].row.split('"')[1],
        bio: user.rows[0].row.split('"')[3],
      },
      blogs: blogs.rows[0],
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET /users/:userid
// @description Get a User's Profile
// @access Public
router.get("/:userid", async (req, res) => {
  try {
    let user = await db.query("SELECT (name,bio) FROM USERS WHERE userid=$1", [
      req.params.userid,
    ]);
    let blogs = await db.query("SELECT * FROM BLOGS WHERE userid=$1", [
      req.params.userid,
    ]);

    res.json({
      userDetails: {
        name: user.rows[0].row.split('"')[1],
        bio: user.rows[0].row.split('"')[3],
      },
      blogs: blogs.rows[0],
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
      const { name, email, password, bio } = req.body;

      let newPassword = md5(password);
      let results = await db.query(
        "UPDATE USERS SET name=$1, email=$2, password=$3, bio=$4 WHERE userid=$5 RETURNING *",
        [name, email, newPassword, bio, req.user.userid]
      );

      res.json(results.rows[0]);
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
    await db.query("DELETE FROM COMMENTS WHERE userid=$1 RETURNING *", [
      req.user.userid,
    ]);
    await db.query("DELETE FROM BLOGS WHERE userid=$1 RETURNING *", [
      req.user.userid,
    ]);

    await db.query("DELETE FROM USERS WHERE userid=$1 RETURNING *", [
      req.user.userid,
    ]);
    res.json("User Deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
