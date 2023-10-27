import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import users from "../userDB";
import Header from "../header/Header";
import iconUser from "../../assets/icon-user.svg";

const Login = () => {
  const [islogged, setIslogged] = useState(false);
  const [loginParams, setLoginParams] = useState({
    user_id: "",
    user_password: "",
  });
  const navigate = useNavigate();
  const handleFormChange = (event) => {
    const loginParamsNew = { ...loginParams };
    const val = event.target.value;
    loginParamsNew[event.target.name] = val;
    setLoginParams(loginParamsNew);
  };

  const login = (event) => {
    const user_id = loginParams.user_id;
    const user_password = loginParams.user_password;
    for (let user of users) {
      if (user.username === user_id && user.password === user_password) {
        localStorage.setItem("token", "T");
        localStorage.setItem("user", JSON.stringify(user)); // set the user data
        setIslogged(true);
        return;
      }
    }
    event.preventDefault();
  };

  useEffect(() => {
    if (islogged) {
      navigate("/");
    }
  }, [islogged, navigate]);

  if (localStorage.getItem("token")) {
    return navigate("/");
  }

  return (
    <div className="login-page">
      <div className="container">
        <Header />
        <div className="mmmNmm">
          <p>Log In to Online Banking</p>
        </div>
        <div className="login-form">
          <form onSubmit={login} className="">
            <div className="form-group">
              <label className="control-label" style={{ color: "#141414" }}>
              User ID
              </label>
              <div className="input_box">
                <input
                  type="text"
                  name="user_id"
                  onChange={handleFormChange}
                  className="form-control"
                  // placeholder="User ID"
                  autofocus=""
                />
              </div>
              <div className="input_box">
                <input
                  type="hidden"
                  name="code"
                  value=""
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" style={{ color: "#141414" }}>
                Password
              </label>
              <input
                type="password"
                name="user_password"
                onChange={handleFormChange}
                className="form-control"
                // placeholder="Password"
              />
            </div>
            <div className="save_username_container">
              <label className="save_username">
                Remember Me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="button_box">
              <input
                type="submit"
                className="btn btn-inverse"
                value="Sign In"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
