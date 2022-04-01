import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";
import "../../css/Login.css"
function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const response = await loginService(user);

      const { authToken } = response.data;
      //*3.Line23, check the token & save in localStorage
      localStorage.setItem("authToken", authToken);
      props.setIsLogin(true);
      //*4.Line28, if evething is ok, redirect to the profile.
      navigate(`/profile`);
    } catch (err) {
      if (err?.response?.status === 400) {
        setErrorMessage("Fill up all the fields");
      } else {
        navigate(`/login`);
      }
    }
  };
  return (
    <div id="wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
      <div className="header">
      <h3>Login</h3>
      <span>Fill out the form below to login.</span>
      </div>
        <div className="content">
          <input
            className="input username"
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input password"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="footer" >
        <button className="button">Login</button>
        </div>
      <p>{errorMessage}</p>
      </form>
    </div>
  );
}

export default Login;
