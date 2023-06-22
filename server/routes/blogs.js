const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require("../db/db");
const auth = require("../middleware/auth");

// @route POST /blogs/create
// @description Create a Blog
// @access Private
router.post(
  "/create",
  [
    auth,
    [
      check("title", "Title is Required").not().isEmpty(),
      check("description", "Description is Required").not().isEmpty(),
      check("category", "Category is Required").not().isEmpty(),
      check("keywords", "Keywords are Required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await db.query("SELECT * FROM USERS WHERE userid=$1", [
        req.user.userid,
      ]);
      let createdon = new Date().toLocaleDateString();

      let { title, description, category, keywords, blog_img } = req.body;

      let result = await db.query(
        "INSERT INTO BLOGS (userid,title,description,author,category,createdon,totalviews,keywords,blog_img,author_img) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
        [
          req.user.userid,
          title,
          description,
          user.rows[0].name,
          category.toLocaleLowerCase(),
          createdon,
          0,
          keywords.toLocaleLowerCase(),
          blog_img,
          user.rows[0].profile_img,
        ]
      );

      if (result.rows[0].length != 0) {
        res.json(result.rows[0]);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route GET /blogs
// @description Get all the blogs
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    let blogs = await db.query("SELECT * FROM BLOGS");
    let randomBlogs = [];
    for (let i = 0; i < 7; i++) {
      let randomNumberIndex = Math.round(Math.random() * blogs.rows.length - 1);
      if (randomBlogs.indexOf(blogs.rows[randomNumberIndex]) === -1)
        randomBlogs.push(blogs.rows[randomNumberIndex]);
    }

    let trendingBlog = await db.query(
      "SELECT * FROM BLOGS WHERE totalviews = (SELECT MAX(totalviews) FROM BLOGS)"
    );

    let technologyBlogs = blogs.rows.filter(
      (blog) => blog.category === "technology"
    );
    let travelBlogs = blogs.rows.filter((blog) => blog.category === "travel");

    res.json({
      blogs: blogs.rows,
      trendingBlog: trendingBlog.rows[0],
      randomBlogs: randomBlogs,
      technologyBlogs: technologyBlogs,
      travelBlogs: travelBlogs,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET /blogs/:blogid
// @description Get a Blog by id
// @access Public
router.get("/:blogid", auth, async (req, res) => {
  try {
    let blog = await db.query("SELECT * FROM BLOGS WHERE blogid=$1", [
      req.params.blogid,
    ]);

    if (blog.rows[0].userid !== req.user.userid) {
      let totalviews = blog.rows[0].totalviews;
      totalviews += 1;

      await db.query(
        "UPDATE BLOGS SET totalviews = $1 WHERE blogid=$2 RETURNING *",
        [totalviews, req.params.blogid]
      );
    }

    res.json({
      blogDetails: blog.rows[0],
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST /blogs/search/:keyword
// @description Search for Blogs by keyword
// @access Public
router.get("/search/:keyword", auth, async (req, res) => {
  try {
    let results = await db.query("SELECT * FROM BLOGS");
    let blogs = results.rows;
    let keyword = req.params.keyword.toLocaleLowerCase();
    let resultBlogArray = [];

    blogs.forEach((blog) => {
      if (
        blog.keywords.toLocaleLowerCase().includes(keyword) ||
        blog.author.toLocaleLowerCase().includes(keyword) ||
        blog.title.toLocaleLowerCase().includes(keyword) ||
        blog.description.toLocaleLowerCase().includes(keyword) ||
        blog.category.toLocaleLowerCase().includes(keyword)
      ) {
        resultBlogArray.push(blog);
      }
    });

    res.json(resultBlogArray);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT /blogs/:blogid/update
// @description Update a Blog
// @access Private
router.put(
  "/:blogid/update",
  [
    auth,
    [
      check("title", "Title is Required").not().isEmpty(),
      check("description", "Description is Required").not().isEmpty(),
      check("category", "Category is Required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let loggedUser = req.user.userid;
      let { title, description, category, keywords, blog_img } = req.body;

      let blog = await db.query("SELECT * FROM BLOGS WHERE blogid=$1", [
        req.params.blogid,
      ]);

      if (blog.rows[0].userid === loggedUser) {
        if (blog.rows.length != 0) {
          let result = await db.query(
            "UPDATE BLOGS SET title=$1, description=$2, category=$3 , keywords=$4, blog_img=$5 WHERE blogid=$6 RETURNING *",
            [
              title,
              description,
              category.toLocaleLowerCase(),
              keywords,
              blog_img,
              blog.rows[0].blogid,
            ]
          );

          res.json(result.rows[0]);
        }
      } else {
        res.status(400).json("Not Authorized to Update this Blog");
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT /blogs/:blogid/delete
// @description Delete a Blog
// @access Private
router.delete("/:blogid/delete", auth, async (req, res) => {
  try {
    let loggedUser = req.user.userid;

    let blog = await db.query("SELECT * FROM BLOGS WHERE blogid=$1", [
      req.params.blogid,
    ]);

    if (blog.rows.length != 0) {
      if (loggedUser === blog.rows[0].userid) {
        await db.query("DELETE FROM BLOGS WHERE blogid=$1", [
          blog.rows[0].blogid,
        ]);

        let updatedBlogs = await db.query(
          "SELECT * FROM BLOGS WHERE userid=$1",
          [loggedUser]
        );

        res.json({ msg: "Blog Deleted", blogs: updatedBlogs.rows });
      } else {
        res.status(400).json("Not Authorized to Delete this Blog");
      }
    } else {
      res.json("Blog doesn't exist");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
