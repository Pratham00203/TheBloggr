import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import bin from "../images/bin.png";
import profileImg from "../images/profile.jpg";
import pencil from "../images/pencil.png";
import { Link, useHistory } from "react-router-dom";
import auth from "../auth";
import { logout, checkAuth } from "../helpers/helpers";
import { useToasts } from "react-toast-notifications";

function Dashboard() {
  document.title = "Dashboard";
  const history = useHistory();
  const { addToast } = useToasts();
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");

  useEffect(() => {
    if (!checkAuth()) {
      auth.logout(() => {
        history.push("/login");
      });
    }
  }, []);

  const myDetails = {
    userDetails: {
      name: "Pratham Shelar",
      user_img: profileImg,
      bio: "Student Developer",
    },
    blogs: [
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
        author: "Pratham Shelar",
        category: "Technology",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
        author: "Pratham Shelar",
        category: "Technology",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
        author: "Pratham Shelar",
        category: "Technology",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
        author: "Pratham Shelar",
        category: "Technology",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
    ],
    followers: [
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratik Kapse",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
    ],
    following: [
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Piyush Kale",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
      {
        user_img: profileImg,
        name: "Pratham Shelar",
      },
    ],
  };

  const showFollowModal = (option) => {
    setModalOption(option);
    setShowModal(true);
  };

  const handleLogout = () => {
    logout();
    addToast("Logged Out Successfully", { appearance: "success" });
    auth.logout(() => {
      history.push("/");
    });
  };

  return (
    <>
      <Navbar />
      {showModal && (
        <Modal
          option={modalOption}
          closeModal={setShowModal}
          followDetails={
            modalOption === "followers"
              ? myDetails.followers
              : myDetails.following
          }
        />
      )}
      <section id='main'>
        <div style={{ filter: `${showModal ? "blur(10px)" : "blur(0px)"}` }}>
          <div className='profile-details d-flex flex-col'>
            <div className='col-1 d-flex'>
              <img src={myDetails.userDetails.user_img} alt='profile' />
              <div className='profile-det'>
                <h1>{myDetails.userDetails.name}</h1>
                <p>{myDetails.userDetails.bio}</p>
                <div className='prof-buttons d-flex'>
                  <Link
                    to={`/update-user/${myDetails.userDetails.name
                      .split(" ")
                      .join("-")}`}
                    className='d-flex align-center'>
                    <img src={pencil} alt='' />
                    Update Profile
                  </Link>
                  <button className='d-flex align-center'>
                    <img src={bin} alt='' />
                    Delete Profile
                  </button>
                  <button
                    className='d-flex align-center'
                    onClick={() => handleLogout()}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <p onClick={() => showFollowModal("followers")}>
                <span>{myDetails.followers.length}</span>Followers
              </p>
              <p onClick={() => showFollowModal("following")}>
                <span>{myDetails.following.length}</span>Following
              </p>
            </div>
          </div>
          <div className='user-blogs'>
            <h1>My Blogs</h1>
            <div className='blogs d-flex flex-col'>
              {React.Children.toArray(
                myDetails.blogs.map((blog) => {
                  return (
                    <Link to={`/blog/${blog.title.split(" ").join("-")}`}>
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
                          <h1>{blog.title}</h1>
                          <Link
                            to={`/user/${blog.author.split(" ").join("-")}`}
                            className='blog-author d-flex align-center'
                            style={{ marginTop: "8px", gap: "10px" }}>
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
                        <div className='prof-buttons d-flex'>
                          <Link
                            to={`/update-blog/${blog.title
                              .split(" ")
                              .join("-")}`}
                            className='d-flex align-center'>
                            <img src={pencil} alt='' />
                            Update Blog
                          </Link>
                          <button className='d-flex align-center'>
                            <img src={bin} alt='' />
                            Delete Blog
                          </button>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
