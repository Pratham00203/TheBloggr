import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function UpdateUserForm({ previousUserDetails }) {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    bio: "",
    profile_img: "",
  });

  useEffect(() => {
    previousUserDetails && setUserDetails(previousUserDetails);
  }, [previousUserDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "profile_img") {
      const file = e.target.files[0];
      previewFile(file);
    }

    setUserDetails((prev) => {
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
      setUserDetails((prev) => {
        return {
          ...prev,
          profile_img: reader.result,
        };
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <>
      <Navbar />
      <section id='main'>
        <div className='update-user-page'>
          <h1>Update User Details.</h1>
          <form action='' className='user-update' onSubmit={handleSubmit}>
            <div className='col-1 d-flex'>
              <label htmlFor='name' className='d-flex flex-col'>
                <span>Name:</span>
                <input
                  type='text'
                  name='name'
                  value={userDetails.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor='email' className='d-flex flex-col'>
                <span>Email Id:</span>
                <input
                  type='email'
                  value={userDetails.email}
                  name='email'
                  onChange={handleChange}
                />
              </label>
            </div>

            <label htmlFor='bio' className='d-flex flex-col'>
              <span>Bio: </span>
              <textarea
                name='bio'
                rows='5'
                value={userDetails.bio}
                onChange={handleChange}></textarea>
            </label>

            <div className='profile-img-upload d-flex align-center'>
              <label htmlFor='profile-img' className='d-flex flex-col'>
                <span>Upload a Profile Picture :</span>
                <input
                  type='file'
                  name='profile_img'
                  value=''
                  accept='image/*'
                  onChange={handleChange}
                />
              </label>
              <div className='preview-img'>
                <p>*Profile Image</p>
                {userDetails.profile_img && (
                  <img src={userDetails.profile_img} alt='profile' />
                )}
              </div>
            </div>

            <input type='submit' value='Update' />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}