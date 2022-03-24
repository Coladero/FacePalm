import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";
import "../../css/Signup.css"
function Signup() {
  //*Line7, useState for have the control.
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //*1.Line15, handle to control the form.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { name, surname, email, password };
    //*2.Line20, Create the User in the DB.
    try {
      await signupService(user);
      navigate("/login");
    } catch (err) {
      // console.log(err.response.data.errorMessage);
      //*3.Line25, check evething is ok if not render error page
      if (err?.response?.status === 400) {
        setErrorMessage(err.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div id="wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
      <div className="header">
      <h3>SignUp</h3>
      <span>Fill out the form below to signup</span>
      </div>
      <div className="content">
        <input
          className="input username"
          placeholder="Firstname"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input username"
          placeholder="Lastname"
          type="text"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          className="input username"
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input username"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="footer">
        <button className="button">Submit</button>
        </div>
      </form>

      <p>{errorMessage}</p>
    </div>
  );
}

export default Signup;
