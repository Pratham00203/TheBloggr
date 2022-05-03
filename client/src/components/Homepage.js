import Navbar from "./Navbar";
import Footer from "./Footer";
import trendImg from "../images/trend.png";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "../auth";
import { checkAuth } from "../helpers/helpers";

export default function Homepage() {
  const history = useHistory();
  document.title = "TheBloggr";
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!checkAuth()) {
      auth.logout(() => {
        history.push("/login");
      });
    }
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  let travelBlogs = [
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
  ];

  let techBlogs = [
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
  ];

  let homeDetails = {
    blogs: [
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
    ],
    trendingBlog: {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      author_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
    },
    randomBlogs: [
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        author_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <section id='main'>
        <div className='top-blog'>
          <Link
            to={`/blog/${homeDetails.trendingBlog.title.split(" ").join("-")}`}>
            <div className='trending'>
              <p className='d-flex align-center'>
                <img src={trendImg} alt='' /> Trending
              </p>

              {/* Trending Blog */}
              <div className='t-blog d-flex flex-col'>
                <div
                  className='t-bg-img'
                  style={{
                    backgroundImage: `url(${homeDetails.trendingBlog.blog_img})`,
                  }}></div>
                <div className='t-blog-details'>
                  <h1>{homeDetails.trendingBlog.title}</h1>
                  <Link
                    to={`/user/${homeDetails.trendingBlog.author
                      .split(" ")
                      .join("-")}`}
                    style={{
                      marginTop: "8px",
                      gap: "10px",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "1.4em",
                    }}
                    className='d-flex align-items'>
                    {" "}
                    <img
                      src={homeDetails.trendingBlog.author_img}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                      alt=''
                    />{" "}
                    {homeDetails.trendingBlog.author}
                  </Link>
                </div>
              </div>
            </div>
          </Link>

          {/* Check out More Section */}
          <div className='check-more'>
            <p>Check out more</p>
            <div className='c-blogs'>
              {React.Children.toArray(
                homeDetails.randomBlogs.map((blog) => {
                  return (
                    <Link to={`/blog/${blog.title.split(" ").join("-")}`}>
                      <div className='c-blog d-flex align-center'>
                        <img src={blog.blog_img} alt='' />
                        <div className='c-blog-det'>
                          <h1>{blog.title}</h1>
                          <Link
                            to={`/user/${blog.author.split(" ").join("-")}`}
                            style={{
                              marginTop: "8px",
                              gap: "10px",
                              color: "rgba(0, 0, 0, 0.5)",
                              fontSize: "1.4em",
                            }}
                            className='d-flex align-items'>
                            {" "}
                            <img
                              src={blog.author_img}
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                              }}
                              alt=''
                            />{" "}
                            {blog.author}
                          </Link>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className='search d-flex justify-center align-center'>
          <form>
            <h1>Search for Blogs by Category, Authors, Interests</h1>
            <div
              className='d-flex align-center search-div'
              style={{ justifyContent: "center" }}>
              <input
                type='text'
                name='query'
                placeholder='Search by Category, Author, Keywords'
                onChange={handleChange}
              />
              <Link
                to={`/search/${searchQuery}`}
                style={{
                  fontFamily: "Lato, sans-serif",
                  padding: "10px",
                  backgroundColor: " #000",
                  color: "#fff",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.4em",
                }}>
                Search
              </Link>
            </div>
            {/* <input type='submit' value='Search' /> */}
          </form>
        </div>

        {/* All blogs */}
        <div className='main-blogs-container'>
          <div className='main-blog-header d-flex'>
            <p>All Blogs</p>
            <Link to='/search/all'>More</Link>
          </div>
          <div className='main-blogs'>
            {React.Children.toArray(
              homeDetails.blogs.map((blog) => {
                return (
                  <Link to={`/blog/${blog.title.split(" ").join("-")}`}>
                    <div className='main-blog d-flex flex-col'>
                      <img src={blog.blog_img} alt='' />
                      <h1>{blog.title}</h1>
                      <Link
                        to={`/user/${blog.author.split(" ").join("-")}`}
                        className='m-blog-author d-flex align-center'
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
                        />{" "}
                        {blog.author}
                      </Link>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>

        {/* Travel Blogs */}
        <div className='main-blogs-container'>
          <div className='main-blog-header d-flex'>
            <p>Travel</p>
            <Link to='/search/Travel'>More</Link>
          </div>
          <div className='main-blogs'>
            {React.Children.toArray(
              travelBlogs.map((blog) => {
                return (
                  <Link to={`/blog/${blog.title.split(" ").join("-")}`}>
                    <div className='main-blog d-flex flex-col'>
                      <img src={blog.blog_img} alt='' />
                      <p
                        className='m-blog-category'
                        style={{ textTransform: "uppercase" }}>
                        {blog.category}
                      </p>
                      <h1>{blog.title}</h1>

                      <Link
                        to={`/user/${blog.author.split(" ").join("-")}`}
                        className='m-blog-author d-flex align-center'
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
                        />{" "}
                        {blog.author}
                      </Link>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>

        {/* Technology Blogs */}
        <div className='main-blogs-container'>
          <div className='main-blog-header d-flex'>
            <p>TECHNOLOGY</p>
            <Link to='/search/Technology'>More</Link>
          </div>
          <div className='main-blogs'>
            {React.Children.toArray(
              techBlogs.map((blog) => {
                return (
                  <Link to={`/blog/${blog.title.split(" ").join("-")}`}>
                    <div className='main-blog d-flex flex-col'>
                      <img src={blog.blog_img} alt='' />
                      <p
                        className='m-blog-category'
                        style={{ textTransform: "uppercase" }}>
                        {blog.category}
                      </p>
                      <h1>{blog.title}</h1>

                      <Link
                        to={`/user/${blog.author.split(" ").join("-")}`}
                        className='m-blog-author d-flex align-center'
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
                        />{" "}
                        {blog.author}
                      </Link>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
