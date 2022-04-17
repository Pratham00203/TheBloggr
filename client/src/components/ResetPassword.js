import { useState } from "react";
import eyeIcon from "../images/eye.png";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [enterOTP, setEnterOTP] = useState(false);
  const [enterPassword, setEnterPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const checkOTP = (e) => {
    //if otp is correct
    setEnterPassword(!enterPassword);
    //else error that otp is incorrect
  };

  const checkEmail = (e) => {
    //if email is correct and exists in database
    setEnterOTP(!enterOTP);
    //else give err
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <section
      id='main'
      className='forgot-p d-flex flex-col align-center justify-center'>
      <div className='container'>
        <h1>Reset Password.</h1>
        <label htmlFor='email' className='d-flex flex-col'>
          <span>Enter Your Email Id: </span>
          <input
            type='email'
            onChange={handleChange}
            name='email'
            placeholder='Enter Your Email Id'
          />
        </label>
        <button className='submit-email' onClick={checkEmail}>
          Next
        </button>
        <div
          className='otp-form'
          style={enterOTP ? { display: "block" } : { display: "none" }}>
          <label htmlFor='otp' className='d-flex flex-col'>
            <span>Enter OTP:</span>
            <input type='text' onChange={handleChange} name='otp' />
          </label>
          <button className='submit-otp' onClick={checkOTP}>
            Proceed
          </button>
        </div>
        <form
          className='reset-password'
          style={enterPassword ? { display: "block" } : { display: "none" }}
          onSubmit={handleSubmit}>
          <label htmlFor='password' className='d-flex flex-col'>
            <span>Enter New Password: </span>
            <img
              className='toggle-password'
              src={eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
              alt=''
            />
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              onChange={handleChange}
              placeholder='Password'
            />
          </label>
          <input type='submit' value='Change Password' />
        </form>
      </div>
    </section>
  );
}
