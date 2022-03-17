import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Leagues from './pages/Countries';
import CountriesDetails from './pages/CountriesDetails';
import PlayerDetail from './pages/PlayerDetail';
import { useContext } from 'react';
import { ThemeContext } from "./context/theme.context"
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

function App() {
  const { darkMode, setDarkMode, switchTheme } = useContext(ThemeContext)
  return (
    <div className="App" style={switchTheme()}>
    <button onClick={() => setDarkMode(!darkMode)}>Change Theme</button>
     <Navbar />
    <Routes>
           //!Navegations Routes//
    <Route path='/' element={<Home/>}/>
    <Route path='/countries' element={<Leagues/>}/>
    <Route path='/countries/:id/players' element={<CountriesDetails/>}/>
    <Route path='/countries/:id/players/details' element={<PlayerDetail/>}/>
           //!User's Routes//
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>


           //!Error Routes//
    <Route path='/error' element={<Error/>}/>
    


    </Routes>

    </div>
  );
}

export default App;
