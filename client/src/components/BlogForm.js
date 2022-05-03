import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useHistory, useParams } from "react-router-dom";
import { checkAuth } from "../helpers/helpers";
import auth from "../auth";

export default function BlogForm({ type, previousBlogDetails }) {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    category: "",
    description: "",
    keywords: "",
    blog_img: "",
  });

  const { blogid } = useParams();
  const history = useHistory();

  const previousBlogDescription = previousBlogDetails
    ? previousBlogDetails.description
    : "";

  useEffect(() => {
    if (!checkAuth()) {
      auth.logout(() => {
        history.push("/login");
      });
    }
    document.title = `${type} Blog`;
    previousBlogDetails && setBlogDetails(previousBlogDetails);
    console.log(blogid);
  }, []);

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

  const handleDescriptionChange = (e) => {
    setBlogDetails((prev) => {
      return {
        ...prev,
        description: e,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await checkProfanity(blogDetails.description))) {
      if (type === "Update") {
        console.log("Updated the Blog");
        console.log(blogDetails);
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
            <SunEditor
              setDefaultStyle="font-family : 'Lato', sans-serif !important"
              height='300px'
              defaultValue={
                previousBlogDetails
                  ? previousBlogDescription
                  : blogDetails.description
              }
              onChange={handleDescriptionChange}
              setOptions={{
                buttonList: [
                  ["undo", "redo"],
                  [
                    ":p-More Paragraph-default.more_paragraph",
                    // "font",
                    "fontSize",
                    "formatBlock",
                    "paragraphStyle",
                    "blockquote",
                  ],
                  [
                    "link",
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],

                  ["fontColor", "hiliteColor", "textStyle"],
                  ["removeFormat"],
                  ["outdent", "indent"],
                  ["align", "horizontalRule", "list", "lineHeight"],
                  [
                    "-right",
                    ":i-More Misc-default.more_vertical",
                    "fullScreen",
                    "showBlocks",
                    "codeView",
                    "preview",
                    "print",
                    "save",
                    "template",
                  ],
                ],
              }}
            />
            {/* <textarea
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
                  : blogDetails.description
                      .trim()
                      .split(" ")
                      .filter((el) => {
                        return el !== " ";
                      }).length

               
              }`}
            </span> */}
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
