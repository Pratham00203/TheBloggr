import { useState } from "react";
import eyeIcon from "../images/eye.png";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    profile_img: "",
  });

  document.title = "Register";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "profile_img") {
      const file = e.target.files[0];
      previewFile(file);
    }

    setRegisterDetails((prev) => {
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
      setRegisterDetails((prev) => {
        return {
          ...prev,
          profile_img: reader.result,
        };
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };

  const register = async () => {
    try {
      const res = await axios.post("/auth/register", registerDetails);
      localStorage.setItem("token", res.data);
      console.log(res.data);
      // setIsLoggedIn(true);
    } catch (err) {
      const errors = err.response.data.errors;
      errors.forEach((err) => {
        alert(err.msg);
      });
    }
  };

  return (
    <div className='login-register-container'>
      <div className='r-container d-flex justify-center align-center'>
        <div className='register-text'>
          <h1>
            Create Your <br />
            Own Blog <br />
            for Free <span>.</span>
          </h1>
          <p>Register yourself and start exploring the world.</p>
        </div>
        <form className='d-flex flex-col' onSubmit={handleSubmit}>
          <input
            type='text'
            value={registerDetails.name}
            name='name'
            placeholder='Enter your Name'
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            value={registerDetails.email}
            placeholder='Enter your Email'
            onChange={handleChange}
          />
          <label htmlFor='password'>
            <img
              className='toggle-password'
              src={eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
              alt=''
            />
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              placeholder='Enter a Password'
              value={registerDetails.password}
              onChange={handleChange}
            />
          </label>
          <textarea
            name='bio'
            cols='30'
            rows='5'
            placeholder='Something About Yourself..'
            value={registerDetails.bio}
            onChange={handleChange}></textarea>
          <div className='profile-img-upload d-flex align-center'>
            <label htmlFor='profile-img' className='d-flex flex-col'>
              <span>Upload a Profile Picture :</span>
              <input
                value=''
                onChange={handleChange}
                type='file'
                name='profile_img'
                accept='image/*'
              />
            </label>
            <div className='preview-img'>
              <p>*Profile Image</p>
              {registerDetails.profile_img && (
                <img src={registerDetails.profile_img} alt='profile' />
              )}
            </div>
          </div>
          <Link to='/login'>Already a User?</Link>
          <input type='submit' value='Register' />
          {isLoggedIn && <Navigate to='/home' />}
        </form>
      </div>
    </div>
  );
}
