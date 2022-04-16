// import axios from "axios";
// import { useState } from "react";
// import BlogForm from "./components/BlogForm";
// import UpdateUserForm from "./components/UpdateUserForm";
// import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import "./App.css";

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
  let isAuthenticated = true;
  // const previousBlogDetails = {
  //   title: "Is WEB 3.0 the new technology revolution?",
  //   category: "Technology",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //   keywords: "tech,web,internet",
  //   blog_img:"https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg"
  // };

  // const previousUserDetails = {
  //   name: "Pratham Shelar",
  //   email: "shelarpratham80@gmail.com",
  //   bio: "Student Developer",
  //   profile_img: "data",
  // };
  return <>{isAuthenticated ? <Homepage /> : <Login />}</>;
}
