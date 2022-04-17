import Navbar from "./Navbar";
import Footer from "./Footer";
import likeImg from "../images/liked.png";
import unLikeImg from "../images/unliked.png";
import redFlag from "../images/red-flag.png";
import { useState } from "react";

export default function Blog({ blogDetails }) {
  const [likeStatus, setLikeStatus] = useState(blogDetails.likeStatus);
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

  return (
    <>
      <Navbar />
      <section id='main'>
        <div className='blog'>
          <h1 className='title'>{blogDetails.blogDetails.title}</h1>
          <p className='blog-author d-flex align-center'>
            Author :
            <a href='profile.html' className='d-flex align-center'>
              <img src={blogDetails.authorDetails.profile_img} alt='' />{" "}
              {blogDetails.authorDetails.name}
            </a>
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
            {comments.map((comment) => {
              return (
                <div className='comment d-flex'>
                  <img src={comment.user_img} alt='' />
                  <div className='comment-det'>
                    <h2>{comment.username}</h2>
                    <p>{comment.postedon}</p>
                    <p className='comment-body'>{comment.commentbody}</p>
                  </div>
                </div>
              );
            })}
            <div class='comment d-flex'>
              <img src='images/profile.jpg' alt='' />
              <div class='comment-det'>
                <h2>Pratham Shelar</h2>
                <p>Posted on : 11/2/22</p>
                <p class='comment-body'>
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
              <button class='comment-delete'>
                <img src='images/bin.png' alt='' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
