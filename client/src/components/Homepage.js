import Navbar from "./Navbar";
import Footer from "./Footer";
import trendImg from "../images/trend.png";
import { useState } from "react";

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [travelBlogs, setTravelBlogs] = useState({});
  // const [techBlogs, setTechBlogs] = useState({});
  // const [worldBlogs, setWordBlogs] = useState({});

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
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
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Travel",
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
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "Technology",
    },
  ];

  let worldBlogs = [
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
    },

    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
    },
    {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      category: "World",
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
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
        description:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas id fugit voluptatibus pariatur ab minus at inventore alias vero iusto, non explicabo perferendis tempore voluptatum perspiciatis blanditiis neque molestiae facilis officiis deserunt aut ad! Eligendi, tenetur numquam ratione voluptatum impedit assumenda quis cumque accusantium quidem dignissimos? Magni, quam quae.",
      },
    ],
    trendingBlog: {
      blog_img:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
      title: "Is WEB 3.0 the new technology revolution?",
      author: "Pratham",
    },
    randomBlogs: [
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
      },
      {
        blog_img:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        title: "Is WEB 3.0 the new technology revolution?",
        author: "Pratham",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <section id='main'>
        <div className='top-blog'>
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
                <p>Author : {homeDetails.trendingBlog.author}</p>
              </div>
            </div>
          </div>

          {/* Check out More Section */}
          <div className='check-more'>
            <p>Check out more</p>
            <div className='c-blogs'>
              {homeDetails.randomBlogs.map((blog) => {
                return (
                  <div className='c-blog d-flex align-center'>
                    <img src={blog.blog_img} alt='' />
                    <div className='c-blog-det'>
                      <h1>{blog.title}</h1>
                      <p style={{ marginTop: "5px" }}>Author : {blog.author}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className='search d-flex justify-center align-center'>
          <form action='' onSubmit={handleSubmit}>
            <h1>Search for Blogs by Category, Authors, Interests</h1>
            <input
              type='text'
              name='query'
              placeholder='Search by Category, Author, Keywords'
              onChange={handleChange}
            />
            <input type='submit' value='Search' />
          </form>
        </div>

        {/* All blogs */}
        <div className='main-blogs-container'>
          <div className='main-blog-header d-flex'>
            <p>All Blogs</p>
            <a href='/'>More</a>
          </div>
          <div className='main-blogs'>
            {homeDetails.blogs.map((blog) => {
              return (
                <div className='main-blog d-flex flex-col'>
                  <img src={blog.blog_img} alt='' />
                  <h1>{blog.title}</h1>
                  {/* <p>
                    {`${blog.description.slice(0, 200)} ... `}
                    <a href='/' style={{ textDecoration: "underline" }}>
                      Read More
                    </a>{" "}
                  </p> */}
                  <p className='m-blog-author'>Author : {blog.author}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Travel Blogs */}
        <div className='main-blogs-container'>
          <div className='main-blog-header d-flex'>
            <p>Travel</p>
            <a href='/'>More</a>
          </div>
          <div className='main-blogs'>
            {travelBlogs.map((blog) => {
              return (
                <div className='main-blog d-flex flex-col'>
                  <img src={blog.blog_img} alt='' />
                  <p
                    className='m-blog-category'
                    style={{ textTransform: "uppercase" }}>
                    {blog.category}
                  </p>
                  <h1>{blog.title}</h1>
                  {/* <p>
                    {`${blog.description.slice(0, 200)} ... `}
                    <a href='/' style={{ textDecoration: "underline" }}>
                      Read More
                    </a>{" "}
                  </p> */}
                  <p className='m-blog-author'>Author : {blog.author}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Blogs */}
        <div className='main-blogs-container'>
          <div className='main-blog-header d-flex'>
            <p>TECHNOLOGY</p>
            <a href='/'>More</a>
          </div>
          <div className='main-blogs'>
            {techBlogs.map((blog) => {
              return (
                <div className='main-blog d-flex flex-col'>
                  <img src={blog.blog_img} alt='' />
                  <p
                    className='m-blog-category'
                    style={{ textTransform: "uppercase" }}>
                    {blog.category}
                  </p>
                  <h1>{blog.title}</h1>
                  {/* <p>
                    {`${blog.description.slice(0, 200)} ... `}
                    <a href='/' style={{ textDecoration: "underline" }}>
                      Read More
                    </a>{" "}
                  </p> */}
                  <p className='m-blog-author'>Author : {blog.author}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* World Blogs */}
        <div className='main-blogs-container'>
          <div className='main-blog-header d-flex'>
            <p>World</p>
            <a href='/'>More</a>
          </div>
          <div className='main-blogs'>
            {worldBlogs.map((blog) => {
              return (
                <div className='main-blog d-flex flex-col'>
                  <img src={blog.blog_img} alt='' />
                  <p
                    className='m-blog-category'
                    style={{ textTransform: "uppercase" }}>
                    {blog.category}
                  </p>
                  <h1>{blog.title}</h1>
                  {/* <p>
                    {`${blog.description.slice(0, 200)} ... `}
                    <a href='/' style={{ textDecoration: "underline" }}>
                      Read More
                    </a>{" "}
                  </p> */}
                  <p className='m-blog-author'>Author : {blog.author}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
