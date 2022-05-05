import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { checkAuth } from "../helpers/helpers";
import auth from "../auth";
import axios from "axios";

export default function Feed({ type }) {
  const { query } = useParams();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const [feedBlogs, setFeedBlogs] = useState([]);

  useEffect(() => {
    if (!checkAuth()) {
      auth.logout(() => {
        history.push("/login");
      });
    }
    type === "feed" ? getFeedBlogs() : getResults();
  }, []);

  const getFeedBlogs = async () => {
    try {
      const res = await axios.get("/blogs/me/my-feed");
      setLoaded(true);
      setFeedBlogs(res.data);
    } catch (err) {}
  };

  const getResults = async () => {
    try {
      if (query === "all") {
        const res = await axios.get("/blogs");
        setLoaded(true);
        setFeedBlogs(res.data.blogs);
      } else {
        const res = await axios.get(`/blogs/search/${query}`);
        setLoaded(true);
        setFeedBlogs(res.data);
      }
    } catch (err) {}
  };

  // const userFeedBlogs = [
  //   {
  //     title: "Is WEB 3.0 the new technology revolution?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //     author: "Pratham",
  //     blog_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //     category: "Technology",
  //     author_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //   },
  //   {
  //     title: "Is WEB 3.0 the new technology revolution?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //     author: "Pratham",
  //     blog_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //     category: "Technology",
  //     author_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //   },
  //   {
  //     title: "Is WEB 3.0 the new technology revolution?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //     author: "Pratham",
  //     blog_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //     category: "Technology",
  //     author_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //   },
  // ];
  // const searchBlogs = [
  //   {
  //     title: "Is WEB 3.0 the new technology revolution?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //     author: "Pratham",
  //     blog_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //     category: "Technology",
  //     author_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //   },
  //   {
  //     title: "Is WEB 3.0 the new technology revolution?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //     author: "Pratham",
  //     blog_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //     category: "Technology",
  //     author_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //   },
  //   {
  //     title: "Is WEB 3.0 the new technology revolution?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
  //     author: "Pratham",
  //     blog_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //     category: "Technology",
  //     author_img:
  //       "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
  //   },
  // ];

  document.title = type === "feed" ? "My Feed" : "Results";

  return (
    <>
      <Navbar />
      {loaded && (
        <section id='main' className='myfeed'>
          <h1>{type === "feed" ? "My Feed" : "Results"}</h1>
          <div className='my-feed-blogs d-flex flex-col'>
            {feedBlogs.length !== 0 ? (
              React.Children.toArray(
                feedBlogs.map((blog) => {
                  return (
                    <Link to={`/blog/${blog.blogid}`}>
                      <div className='f-blog d-flex'>
                        <img src={blog.blog_img} alt='' />
                        <div className='f-blog-det'>
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
                    </Link>
                  );
                })
              )
            ) : (
              <Redirect to='/no-results' />
            )}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
