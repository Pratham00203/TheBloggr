// import axios from "axios";
// import { useState } from "react";
// import BlogForm from "./components/BlogForm";
// import UpdateUserForm from "./components/UpdateUserForm";
import Register from "./components/Register";
// import NoResult from "./components/NoResult";
// import Blog from "./components/Blog";
import ResetPassword from "./components/ResetPassword";
// import Profile from "./components/Profile";
// import Feed from "./components/Feed";
// import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  //     "<h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.</h1>",
  //   keywords: "tech,web,internet",
  //   blog_img:
  //     "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  // };

  // const previousUserDetails = {
  //   name: "Pratham Shelar",
  //   email: "shelarpratham80@gmail.com",
  //   bio: "Student Developer",
  //   profile_img: "data",
  // };

  // const blogDetails = {
  //   authorDetails: {
  //     name: "Pratham Shelar",
  //     profile_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //   },
  //   blogDetails: {
  //     title: "Is WEB 3.0 the new technology revolution?",
  //     postedon: "11/2/22",
  //     blog_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //   },
  //   comments: [
  //     {
  //       username: "Pratham Shelar",
  //       user_img:
  //         "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //       postedon: new Date().toLocaleDateString(),
  //       commentbody: "Cool!",
  //     },
  //     {
  //       username: "Prathamesh Gurgule",
  //       user_img:
  //         "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //       postedon: new Date().toLocaleDateString(),
  //       commentbody: "For sure.",
  //     },
  //     {
  //       username: "Rohan Shrotri",
  //       user_img:
  //         "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //       postedon: new Date().toLocaleDateString(),
  //       commentbody: "Indeed!",
  //     },
  //     {
  //       username: "Pratik Kapse",
  //       user_img:
  //         "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //       postedon: new Date().toLocaleDateString(),
  //       commentbody: "Very Good",
  //     },
  //   ],
  //   likes: [
  //     {
  //       username: "Pratham Shelar",
  //     },
  //     {
  //       username: "Rohan Shrotri",
  //     },
  //     {
  //       username: "Pratik Kapse",
  //     },
  //     {
  //       username: "Piyush Kale",
  //     },
  //   ],
  //   likeStatus: true,
  // };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={isAuthenticated ? <Homepage /> : <Login />}
        />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}
