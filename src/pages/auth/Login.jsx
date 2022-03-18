import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { loginService } from '../../services/auth.services';


function Login(props) {
  // console.log(props)
  
  //*1.Line9, create the state.
  const [email, setEmail] = useState("")
  const [password, setPassword] =useState("")
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(props)

  //*2.Line15, create the handle for the form and check user/token.
  const handleSubmit = async (e) =>{
      e.preventDefault()
      const user = {email,password}

    try{
      //*3.Line20, connect to the server.
      const response = await loginService(user)
      const {authToken} = response.data
      // console.log("hola", authToken)
      //*3.Line23, check the token & save in localStorage
      localStorage.setItem("authToken", authToken)
      props.setIsLogin(true)
      // console.log(props.setIsLogIn)
      //*4.Line28, if evething is ok, redirect to the profile.
      navigate("/profile")  
    }catch(err){
      if (err?.response?.status === 400) {
        console.log(err.response)
        setErrorMessage("Fill up all the fields");
      } else {
        navigate(`/login`);
      }
    }
  }
  return (
    <div>

    <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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
    onChange={(e)=> setPassword(e.target.value)} />

    <button>Login</button>
    </form>
    <p>{errorMessage}</p>
    </div>
  )
}

export default Login