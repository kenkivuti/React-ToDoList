import { useState } from "react";
import { useDispatch } from "react-redux";
import '../store/login.css'
import { useNavigate }  from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  type AuthType = {
    username: string;
    password: string;
  };

  type ResponseData = {
    access_token: string;
    message: string;
  };

  const [form] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    // check if creds by user are correct
    // Update global state
    e.preventDefault();

    const formContent: AuthType = {
      username: form.username,
      password: form.password,
    };
    //    hit the api with the creds from form

    try {
      const apiUrl = "http://127.0.0.1:5000/login";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Done: ", response);

      const responseData: ResponseData = {
        ...response.data,
      };

      console.log("Done....", responseData);
      localStorage.setItem("Token ", responseData.access_token);

      navigate("/")
    } catch (error) {
      console.log(error);
    }

    // dispatch(setAuthentication(formContent))
  };

  return (
    <div>
      <Layout />
      <br />
      <br />
     <div className="login-page">
      <div className="left">
        <h3>TO Do</h3>
        <h4>Welcome <br />Start your journey <br />now with our <br/>Management System! </h4>
      </div>
      <div className="Right">
        <h3>Login to Your Account</h3>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
             type="username"
             name="name"
             required
           />
           <br /><br />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
             type="password"
             name="password"
             required
           />
        </div>
        <br /><br />
        <button className="login-button" type="submit">Login</button>
      </div>
      </div>
    </div>
  );
}

export default Login;
