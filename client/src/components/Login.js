import { useState } from "react";
import eyeIcon from "../images/eye.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

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
    console.log(loginDetails);
  };

  return (
    <>
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
          <a href='forgotpassword.html'>Forgot Password</a>
          <a href='register.html'>Not a User?</a>
          <input type='submit' value='Login' />
        </form>
      </div>
    </>
  );
}
