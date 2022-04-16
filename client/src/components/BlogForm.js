import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BlogForm({ type, previousBlogDetails }) {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    category: "",
    description: "",
    keywords: "",
    blog_img: "",
  });

  useEffect(() => {
    previousBlogDetails && setBlogDetails(previousBlogDetails);
  }, [previousBlogDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "blog_img") {
      const file = e.target.files[0];
      previewFile(file);
    }

    setBlogDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBlogDetails((prev) => {
        return {
          ...prev,
          blog_img: reader.result,
        };
      });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await checkProfanity(blogDetails.description))) {
      if (type === "Update") {
        console.log("Updated the Blog");
      } else {
        console.log(blogDetails);
      }
    } else {
      alert("There are some offensive words in your blog. Please Change them.");
    }
  };

  const checkProfanity = async (text) => {
    const res = await axios.get(
      `https://www.purgomalum.com/service/containsprofanity?text=${text}`
    );
    return res.data; //Returns False if there is nothing offensive //Returns True if there are soffensive words;
  };

  return (
    <>
      <Navbar />
      <section id='main'>
        <h1 className='blog-header'>{type} Blog.</h1>
        <form className='create-blog d-flex flex-col' onSubmit={handleSubmit}>
          <div className='col-1 d-flex'>
            <label htmlFor='title' className='d-flex flex-col'>
              <span>Title:</span>
              <input
                type='text'
                name='title'
                placeholder='Enter Title of the Blog'
                onChange={handleChange}
                value={blogDetails.title}
              />
            </label>
            <label htmlFor='category' className='d-flex flex-col'>
              <span>Category :</span>
              <input
                type='text'
                name='category'
                placeholder='Category of the Blog'
                onChange={handleChange}
                value={blogDetails.category}
              />
              <span className='example'>
                Eg : Technology, Travel, Personal,etc.
              </span>
            </label>
          </div>
          <label htmlFor='description' className='d-flex flex-col'>
            <span>Description:</span>
            <textarea
              name='description'
              cols='30'
              rows='10'
              placeholder='Description of the Blog'
              onChange={handleChange}
              value={blogDetails.description}></textarea>
            <span className='example'>
              {`Total Characters: ${blogDetails.description.length}  
              Total Words: ${
                !blogDetails.description
                  ? 0
                  : blogDetails.description.split(" ").length
              }`}
            </span>
          </label>
          <label htmlFor='keywords ' className='d-flex flex-col'>
            <span>Keywords:</span>
            <input
              type='text'
              name='keywords'
              placeholder='Enter Keywords'
              onChange={handleChange}
              value={blogDetails.keywords}
            />
            <span className='example'>
              Eg : For Technology - tech,web,internet,etc
            </span>
          </label>
          <label htmlFor='' className='d-flex flex-col'>
            <span>Upload Blog Pic:</span>
            <input
              type='file'
              name='blog_img'
              value=''
              onChange={handleChange}
            />
          </label>
          <div className='blog-img-preview'>
            {blogDetails.blog_img && (
              <img src={blogDetails.blog_img} alt='blog' />
            )}
          </div>
          <input type='submit' value='Post' />
        </form>
      </section>
      <Footer />
    </>
  );
}
