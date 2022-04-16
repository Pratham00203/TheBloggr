// import axios from "axios";
// import { useState } from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";

export default function App() {
  // const [blogs, setBlogs] = useState([]);
  // const [trendingBlog, setTrendingBlog] = useState({});
  // const [randomBlogs, setRandomBlogs] = useState([]);
  // async function fetchData() {
  //   // const config = {
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // };

  //   // const body = JSON.stringify({ email, password });

  //   try {
  //     const res = await axios.get("/blogs");
  //     setBlogs(res.data.blogs);
  //     setTrendingBlog(res.data.trendingBlog);
  //     setRandomBlogs(res.data.randomBlogs);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // });

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  let isAuthenticated = false;
  return <>{isAuthenticated ? <Homepage /> : <Login />}</>;
}
