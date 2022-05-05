import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { checkAuth } from "../helpers/helpers";
import auth from "../auth";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
export default function Profile() {
  const history = useHistory();
  const { addToast } = useToasts();

  const { userid } = useParams();

  const [isFollowing, setIsFollowing] = useState(false);
  const [profileDetails, setProfileDetails] = useState();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (!checkAuth()) {
      auth.logout(() => {
        history.push("/login");
      });
    }
    getUserDetails();
    getCurrentUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const res = await axios.get(`/users/${userid}`);
      setProfileDetails(res.data);
      setIsFollowing(res.data.followStatus);
      document.title = `${res.data.userDetails.name}`;
    } catch (err) {}
  };

  const getCurrentUserDetails = async () => {
    try {
      const res = await axios.get("/users/me");
      setCurrentUser(res.data.userDetails);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollow = () => {
    if (isFollowing) {
      unfollow();
    } else {
      follow();
    }
    if (currentUser.userid !== profileDetails.userDetails.userid) {
      setIsFollowing(!isFollowing);
    }
  };

  const unfollow = async () => {
    try {
      await axios.post(`/users/unfollow/${profileDetails.userDetails.userid}`);
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
    }
  };

  const follow = async () => {
    try {
      const res = await axios.post(
        `/users/follow/${profileDetails.userDetails.userid}`
      );
      res.data === "You can't Follow yourself" &&
        addToast(res.data, { appearance: "error" });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
    }
  };

  return (
    <>
      <Navbar />
      {profileDetails && (
        <section id='main'>
          <div className='profile-details d-flex flex-col'>
            <div className='col-1 d-flex'>
              <img src={profileDetails.userDetails.profile_img} alt='profile' />
              <div className='profile-det'>
                <h1>{profileDetails.userDetails.name}</h1>
                <p>{profileDetails.userDetails.bio}</p>
                <div className='prof-buttons'>
                  <button className='follow-btn' onClick={handleFollow}>
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='user-blogs'>
            <h1>Blogs by {profileDetails.userDetails.name}</h1>
            <div className='blogs d-flex flex-col'>
              {React.Children.toArray(
                profileDetails.blogs.map((blog) => {
                  return (
                    <div className='blog d-flex align-center'>
                      <img src={blog.blog_img} alt='' />
                      <div className='blog-det'>
                        <p
                          style={{
                            margin: "10px 0",
                            textTransform: "uppercase",
                            color: "blueviolet",
                          }}>
                          {blog.category}
                        </p>
                        <Link to={`/blog/${blog.blogid}`}>
                          <h1>{blog.title}</h1>
                        </Link>

                        <Link
                          to={`/user/${blog.userid}`}
                          className='blog-author d-flex align-center'
                          style={{
                            marginTop: "8px",
                            gap: "10px",
                            color: "rgba(0, 0, 0, 0.5)",
                            fontSize: "1.5em",
                          }}>
                          <img
                            src={blog.author_img}
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                            }}
                            alt=''
                          />
                          {blog.author}
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
