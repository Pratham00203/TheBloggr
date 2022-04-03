import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [trendingBlog, setTrendingBlog] = useState({});
  const [randomBlogs, setRandomBlogs] = useState([]);
  async function fetchData() {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // const body = JSON.stringify({ email, password });

    try {
      const res = await axios.get("/blogs");
      setBlogs(res.data.blogs);
      setTrendingBlog(res.data.trendingBlog);
      setRandomBlogs(res.data.randomBlogs);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <div>
        <h1>Trending Now</h1>
        <p>{trendingBlog.title}</p>
        <p>{trendingBlog.createdon}</p>
      </div>

      <h1>Check Out more</h1>
      {randomBlogs.map((blog) => {
        return (
          <div>
            <p>{blog.title}</p>
            <p>{blog.createdon}</p>
          </div>
        );
      })}

      <h1>All Blogs</h1>
      {blogs.map((blog) => {
        return (
          <div>
            <p>{blog.title}</p>
            <p>{blog.createdon}</p>
          </div>
        );
      })}
    </>
  );
}
