import Navbar from "./Navbar";
import Footer from "./Footer";
import likeImg from "../images/liked.png";
import unLikeImg from "../images/unliked.png";
import redFlag from "../images/red-flag.png";
import bin from "../images/bin.png";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Blog() {
  const { blogid } = useParams();

  useEffect(() => {
    console.log(blogid);
  }, []);

  const blogDetails = {
    blogDetails: {
      author: "Pratham Shelar",
      title: "Is WEB 3.0 the new technology revolution?",
      postedon: new Date().toLocaleDateString(),
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero tenetur at fugiat consequuntur quidem minima quaerat, ipsum placeat dolores ullam eum porro dolorem alias, voluptas quo maiores molestiae perspiciatis. Sunt cupiditate enim non dolorum ut ipsa obcaecati! Possimus odio impedit eum amet porro est eius quaerat illum modi animi.",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    comments: [
      {
        username: "Pratham Shelar",
        user_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        postedon: new Date().toLocaleDateString(),
        commentbody: "Cool!",
      },
      {
        username: "Prathamesh Gurgule",
        user_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        postedon: new Date().toLocaleDateString(),
        commentbody: "For sure.",
      },
      {
        username: "Rohan Shrotri",
        user_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        postedon: new Date().toLocaleDateString(),
        commentbody: "Indeed!",
      },
      {
        username: "Pratik Kapse",
        user_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        postedon: new Date().toLocaleDateString(),
        commentbody: "Very Good",
      },
    ],
    likes: [
      {
        username: "Pratham Shelar",
      },
      {
        username: "Rohan Shrotri",
      },
      {
        username: "Pratik Kapse",
      },
      {
        username: "Piyush Kale",
      },
    ],
    likeStatus: true,
    followStatus: false,
  };

  const [likeStatus, setLikeStatus] = useState(blogDetails.likeStatus);
  const [followStatus, setFollowStatus] = useState(blogDetails.followStatus);
  const [comments, setComments] = useState(blogDetails.comments);
  const [likes, setLikes] = useState(blogDetails.likes);
  const [reportForm, setReportForm] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [reportReason, setReportReason] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "reason" ? setReportReason(value) : setCommentText(value);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    console.log(reportReason);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log(commentText);
    //Send a request to add comment
    // setComments(res.data);
  };

  const handleLikes = () => {
    if (likeStatus) {
      //Send put request to update a like;
      //and use the output of the backend to update likes;
      //   setLikes(res.data);
    } else {
      //Send put request to remove a like;
      //and use the output of the backend to update likes;
      //   setLikes(res.data);
    }
    setLikeStatus(!likeStatus);
  };

  const handleFollow = () => {
    if (followStatus) {
    } else {
    }
    setFollowStatus(!followStatus);
  };

  return (
    <>
      <Navbar />
      <section id='main'>
        <div className='blog'>
          <h1 className='title'>{blogDetails.blogDetails.title}</h1>
          <p className='blog-author d-flex align-center'>
            <Link
              to={`/user/${blogDetails.blogDetails.author
                .split(" ")
                .join("-")}`}
              className='d-flex align-center'
              style={{ marginBottom: "8px" }}>
              <img src={blogDetails.blogDetails.author_img} alt='' />{" "}
              {blogDetails.blogDetails.author}
            </Link>
            <button
              className='d-flex align-center'
              onClick={handleFollow}
              style={{
                border: "none",
                padding: "5px 10px",
                color: "#ffff",
                backgroundColor: "blueviolet",
                borderRadius: "20px",
                marginTop: "-8px",
              }}>
              {followStatus ? "Following" : "Follow"}
            </button>
          </p>
          <p className='blog-create'>
            Posted On : {blogDetails.blogDetails.postedon}
          </p>
          <img src={blogDetails.blogDetails.blog_img} alt='' />
          <p className='blog-desc'>{blogDetails.blogDetails.description}</p>
        </div>

        <div className='social-options d-flex'>
          <button className='like d-flex align-center'>
            {
              <img
                src={likeStatus ? likeImg : unLikeImg}
                alt=''
                onClick={handleLikes}
              />
            }
            {likes.length}
          </button>
          <button
            className='report d-flex align-center'
            onClick={() => {
              setReportForm(!reportForm);
            }}>
            <img src={redFlag} alt='' />
            Report
          </button>
        </div>
        <form
          onSubmit={handleReportSubmit}
          className='report-form'
          style={reportForm ? { display: "block" } : { display: "none" }}>
          <label htmlFor='reason'>Select Reason for Report:</label>
          <select name='reason' id='' onChange={handleChange}>
            <option value='Misleading'>Misleading</option>
            <option value='Spam'>Spam</option>
            <option value='Violent or Repulsive Content'>
              Violent or Repulsive Content
            </option>
            <option value='Harrasment or Bullying'>
              Harrasment or Bullying
            </option>
            <option value='Harmful'>Harmful</option>
            <option value='Promotes Terrorism'>Promotes Terrorism</option>
          </select>
          <input type='submit' value='Report' />
        </form>

        <div className='comments-section'>
          <h1>
            Comments - <span>{comments.length}</span>
          </h1>
          <form className='comment-form' onSubmit={handleCommentSubmit}>
            <textarea
              name='commentbody'
              rows='5'
              placeholder='Leave a comment'
              onChange={handleChange}></textarea>
            <input type='submit' value='Comment' />
          </form>
          <div className='comments'>
            {React.Children.toArray(
              comments.map((comment) => {
                return (
                  <div className='comment d-flex'>
                    <img src={comment.user_img} alt='' />
                    <div className='comment-det'>
                      <Link
                        to={`/user/${comment.username.split(" ").join("-")}`}
                        style={{ color: "blueviolet" }}>
                        <h2>{comment.username}</h2>
                      </Link>
                      <p>{comment.postedon}</p>
                      <p className='comment-body'>{comment.commentbody}</p>
                    </div>
                  </div>
                );
              })
            )}
            <div className='comment d-flex'>
              <img
                src='https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg'
                alt=''
              />
              <div className='comment-det'>
                <h2>Pratham Shelar</h2>
                <p>Posted on : 11/2/22</p>
                <p className='comment-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aperiam obcaecati qui perspiciatis culpa eos minus dolores
                  accusantium, aliquam quibusdam fuga asperiores cum quisquam ea
                  praesentium nam placeat officia consequatur tempore temporibus
                  voluptates exercitationem. Blanditiis beatae aliquid
                  reiciendis laudantium facere accusamus illum porro
                  reprehenderit fuga, doloribus cupiditate inventore voluptas
                  omnis.
                </p>
              </div>
              <button className='comment-delete'>
                <img src={bin} alt='' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}