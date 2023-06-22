import Navbar from "./Navbar";
import Footer from "./Footer";
import pencil from "../images/pencil.png";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import auth from "../auth";
import { checkAuth } from "../helpers/helpers";
import axios from "axios";
import Spinner from "./Spinner";

export default function Blog() {
  const history = useHistory();
  const { blogid } = useParams();
  const [blogDetails, setBlogDetails] = useState();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (!checkAuth()) {
      auth.logout(() => {
        history.push("/login");
      });
    }
    getBlogDetails();
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.get("/users/me", config);
      setCurrentUser(res.data.userDetails);
    } catch (err) {
      console.log(err);
    }
  };

  const getBlogDetails = async () => {
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.get(`/blogs/${blogid}`, config);
      setDetails(res.data);
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
    }
  };

  const setDetails = (data) => {
    document.title = `${data.blogDetails.title}`;
    setBlogDetails(data.blogDetails);
  };

  return (
    <>
      <Navbar />
      {blogDetails ? (
        <section id='main'>
          <div className='blog'>
            <h1 className='title'>{blogDetails.title} </h1>
            <p className='blog-author d-flex align-center'>
              <Link
                to={`/user/${blogDetails.userid}`}
                className='d-flex align-center'
                style={{ marginBottom: "8px" }}>
                <img src={blogDetails.author_img} alt='' /> {blogDetails.author}
              </Link>

              {currentUser && currentUser.userid === blogDetails.userid && (
                <Link to={`/update-blog/${blogDetails.blogid}`}>
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "0",
                    }}
                    src={pencil}
                    alt='update'
                  />
                </Link>
              )}
            </p>
            <p className='blog-create'>Posted On : {blogDetails.createdon}</p>
            {blogDetails.blog_img && <img src={blogDetails.blog_img} alt='' />}
            <div
              className='blog-desc'
              dangerouslySetInnerHTML={{
                __html: blogDetails.description,
              }}></div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
      <Footer />
    </>
  );
}
