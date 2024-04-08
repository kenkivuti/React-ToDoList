import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import {setAuthentication  } from "../store/authAction"
import axios from "axios";
import Layout from "../components/Layout";

function Login() {
  const dispatch = useDispatch();

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
    } catch (error) {
      console.log(error);
    }

    // dispatch(setAuthentication(formContent))
  };

  return (
    <div >
      <Layout />
      <br />
      <br />
     <div style={{ border: '3px solid', padding: '20px', borderRadius: '5px' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            name="name"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            make sure its the correct username.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default Login;
