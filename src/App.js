import { Route, Routes } from "react-router-dom";
import "./App.css";
              //!Navbar & Routes//
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Leagues from "./pages/Countries";
import CountriesDetails from "./pages/CountriesDetails";
import PlayerDetail from "./pages/PlayerDetail";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/auth/Profile";
              //!Context//
import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";

function App() {
  const { darkMode, setDarkMode, switchTheme } = useContext(ThemeContext);



  return (
    <div className="App" style={switchTheme()}>
      <button onClick={() => setDarkMode(!darkMode)}>Theme</button>
      <Navbar />
      <Routes>
              //!Navegations Routes//
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Leagues />} />
        <Route path="/countries/:id/players" element={<CountriesDetails />} />
        <Route
          path="/countries/:id/players/details"
          element={<PlayerDetail />}
        />
              //!User's Routes//
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
              //!Error Routes//
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
