import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";

function Signup() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { name, surname, email, password };
    //*2.Line19, Create the User in the DB.
    try {
      await signupService(user);
      navigate("/login")
    } catch (err) {
      // console.log(err.response.data.errorMessage);
      //*3.Line24, check evething is ok if not render error page
      if (err?.response?.status === 400) {
        setErrorMessage(err.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Fistname: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="surname">Lastname: </label>
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>

      <p>{errorMessage}</p>
    </div>
  );
}

export default Signup;