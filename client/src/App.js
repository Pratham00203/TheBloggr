import axios from "axios";
import BlogForm from "./components/BlogForm";
import UpdateUserForm from "./components/UpdateUserForm";
import Register from "./components/Register";
import Blog from "./components/Blog";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import NoResult from "./components/NoResult";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.baseURL = "http://localhost:5000";
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {isAuthenticated ? <Homepage /> : <Login />}
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/reset-password'>
          <ResetPassword />
        </Route>
        <Route exact path='/home'>
          <Homepage />
        </Route>
        <Route exact path='/create-blog'>
          <BlogForm type='Create' />
        </Route>
        <Route exact path='/update-blog/:blogid'>
          <BlogForm type='Update' />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/my-feed'>
          <Feed type='feed' />
        </Route>
        <Route exact path='/blog/:blogid'>
          <Blog />
        </Route>
        <Route exact path='/user/user:id'>
          <Profile />
        </Route>
        <Route exact path='/search/:query'>
          <Feed type='search' />
        </Route>
        <Route exact path='/update-user/:user-id'>
          <UpdateUserForm />
        </Route>
        <Route exact path='/no-results'>
          <NoResult />
        </Route>

        {/* <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/reset-password' element={<ResetPassword />} />
        <Route exact path='/home' element={<Homepage />} />
        <Route exact path='/my-feed' element={<Feed type='feed' />} />
        <Route exact path='/create-blog' element={<BlogForm type='Create' />} />
        <Route
          exact
          path='/update-blog/:blogid'
          element={<BlogForm type='Update' />}
        />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/blog/:blogid' element={<Blog />} />
        <Route exact path='/user/:userid' element={<Profile />} />
        <Route exact path='/search/:query' element={<Feed type='search' />} />
        <Route exact path='/update-user/:userid' element={<UpdateUserForm />} />
        <Route exact path='/no-results' element={<NoResult />} /> */}
      </Switch>
    </Router>
  );
}
