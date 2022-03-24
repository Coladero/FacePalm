import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./css/App.css";
            //!Navbar & Routes//
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import CountriesDetails from "./pages/CountriesDetails";
import PlayerDetail from "./pages/PlayerDetail";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Countries from "./pages/Countries";
import AddPlayer from "./components/AddPlayer";
import EditPlayer from "./pages/EditPlayer";
            //!Chat Routes//
import Profile from "./pages/auth/Profile";
import UserList from "./pages/chat/UserList";
import Messenger from "./pages/chat/Messenger"
            //!Context//
import { ThemeContext } from "./context/theme.context";
            //!services//
import { checkUserService } from "./services/auth.services";

function App() {
  const { darkMode, setDarkMode, switchTheme } = useContext(ThemeContext);
  const [ isLogin, setIsLogin ] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    checkUser()
  },[])

  const checkUser = async () =>{
    try{
      await checkUserService()
      //*  , if the user is login change state to true
      setIsLogin(true)
    }catch(err){
      //*   ,if the user is Not login redirect to the login page.
      setIsLogin(false)
      navigate("/login")
    }
  }
  return (
    <div className="App" style={switchTheme()}>
      <button onClick={() => setDarkMode(!darkMode)}>Theme</button>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Routes>
              //!Navegations Routes//
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id/players" element={<CountriesDetails />} />
        <Route path="/countries/:id/players/details" element={<PlayerDetail />}/>
        <Route path="/countries/add/:id" element={<AddPlayer/>}/>
        <Route path="/countries/:id/edit" element={ <EditPlayer /> } />
              //!User's Routes//
        <Route path="/login" element={<Login setIsLogin={setIsLogin}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
              //!Chat Routes//
        <Route path="/users" element={<UserList />}/>
        <Route path="/messenger/:chatId" element={<Messenger/>}/>
              //!Error Routes//
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
