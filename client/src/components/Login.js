import { useState } from "react";
import eyeIcon from "../images/eye.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import auth from "../auth";
import { checkAuth } from "../helpers/helpers";

export default function Login() {
  const history = useHistory();
  document.title = "Login";

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

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      const res = await axios.post("/auth/login", loginDetails);
      localStorage.setItem("token", res.data);
      if (checkAuth()) {
        auth.login(() => {
          history.push("/home");
        });
      }
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
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
        <form className='d-flex flex-col' onSubmit={handleLogin}>
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
        </form>
      </div>
    </div>
  );
}
