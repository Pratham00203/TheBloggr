const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require("../db/db");
const auth = require("../middleware/auth");

// @route PUT /comments/:blogid/
// @description Comment on a Blog
// @access Private
router.put(
  "/:blogid",
  [auth, [check("commentbody", "Enter the text").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    // If the errors array is not empty set status 400:Bad request and give the error messages in json
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await db.query("SELECT (name) FROM USERS WHERE userid=$1", [
        req.user.userid,
      ]);
      let blog = await db.query("SELECT * FROM BLOGS WHERE blogid=$1", [
        req.params.blogid,
      ]);

      const { commentbody } = req.body;
      let postedon = new Date().toLocaleDateString();

      await db.query(
        "INSERT INTO COMMENTS (userid,blogid,commentbody,username,postedon) VALUES ($1,$2,$3,$4,$5)",
        [
          req.user.userid,
          req.params.blogid,
          commentbody,
          user.rows[0].name,
          postedon,
        ]
      );

      let totalcomments = blog.rows[0].totalcomments;
      totalcomments += 1;

      await db.query("UPDATE BLOGS SET totalcomments=$1 WHERE blogid=$2", [
        totalcomments,
        req.params.blogid,
      ]);

      res.json("Added comment");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT /comments/:commentid/:blogid/delete
// @description Delete comment on blog
// @access Private
router.delete("/:commentid/:blogid/delete", auth, async (req, res) => {
  try {
    let blog = await db.query("SELECT * FROM BLOGS WHERE blogid=$1", [
      req.params.blogid,
    ]);

    let comment = await db.query("SELECT * FROM COMMENTS WHERE commentid=$1", [
      req.params.commentid,
    ]);

    if (comment.rows[0].userid === req.user.userid) {
      await db.query("DELETE FROM COMMENTS WHERE commentid=$1", [
        req.params.commentid,
      ]);
      let totalcomments = blog.rows[0].totalcomments;
      totalcomments -= 1;

      await db.query("UPDATE BLOGS SET totalcomments=$1 WHERE blogid=$2", [
        totalcomments,
        req.params.blogid,
      ]);
      res.json("Comment Deleted");
    } else {
      res.json("Not authorized to delete comment");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
