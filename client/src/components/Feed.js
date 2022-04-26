import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
export default function Feed({ type }) {
  const [feedBlogs, setFeedBlogs] = useState([]);

  useEffect(() => {
    if (type === "feed") {
      setFeedBlogs(userFeedBlogs);
    } else {
      setFeedBlogs(searchBlogs);
    }
  });

  const userFeedBlogs = [
    {
      title: "Is WEB 3.0 the new technology revolution?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
      author: "Pratham",
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      title: "Is WEB 3.0 the new technology revolution?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
      author: "Pratham",
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      title: "Is WEB 3.0 the new technology revolution?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
      author: "Pratham",
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
  ];
  const searchBlogs = [
    {
      title: "Is WEB 3.0 the new technology revolution?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
      author: "Pratham",
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      title: "Is WEB 3.0 the new technology revolution?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
      author: "Pratham",
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      title: "Is WEB 3.0 the new technology revolution?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
      author: "Pratham",
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <section id='main' className='myfeed'>
        <h1>{type === "feed" ? "My Feed" : "Search Results"}</h1>
        <div className='my-feed-blogs d-flex flex-col'>
          {feedBlogs.map((blog) => {
            return (
              <div className='f-blog d-flex'>
                <img src={blog.blog_img} alt='' />
                <div className='f-blog-det'>
                  <h1>{blog.title}</h1>
                  <p>
                    {`${blog.description.slice(0, 300)} ... `}
                    <a
                      href='/'
                      style={{
                        color: "blueviolet",
                        textDecoration: "underline",
                      }}>
                      {" "}
                      Read more
                    </a>
                  </p>

                  <a href='/' className='f-blog-author'>
                    By -{blog.author}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
