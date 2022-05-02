import { useState } from "react";
import eyeIcon from "../images/eye.png";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {
  document.title = "Login";

  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      const res = await axios.post("/auth/login", loginDetails);
      localStorage.setItem("token", res.data);
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
      <div className='l-container d-flex justify-center align-center'>
        <h1>
          Login to <br />
          Your <br />
          Account <span>.</span>
        </h1>
        <form className='d-flex flex-col' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            value={loginDetails.email}
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
              placeholder='Enter Your Password'
              value={loginDetails.password}
              onChange={handleChange}
            />
          </label>
          <Link to='/reset-password'>Forgot Password</Link>
          <Link to='/register'>Not a User?</Link>
          <input type='submit' value='Login' />
          {isLoggedIn && <Redirect to='/home' />}
        </form>
      </div>
    </div>
  );
}
