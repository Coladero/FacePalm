import { NavLink } from 'react-router-dom'

function Navbar() {


  return (
      <div className='navigation'>   
        <ul>
            <li className='list active'>
                <NavLink href="#" className="NavLink" to="/">
                <span className='icon'>
                <ion-icon name="home"></ion-icon>
                </span>
                <span className='text'>Home</span>
                </NavLink>
            </li>
            <li className='list'>
            <NavLink href="#" className="NavLink" to="/countries">
                <span className='icon'>
                <ion-icon name="football"></ion-icon>
                </span>
                <span className='text'>Country</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/signup">
                <span className='icon'>
                <ion-icon name="log-in"></ion-icon>
                </span>
                <span className='text'>Signup</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/login">
                <span className='icon'>
                <ion-icon name="log-in"></ion-icon>
                </span>
                <span className='text'>Login</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/profile">
                <span className='icon'>
                <ion-icon name="person-circle"></ion-icon>
                </span>
                <span className='text'>Profile</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/">
                <span  className='icon'>
                <ion-icon name="log-out"></ion-icon>
                </span>
                <span className='text'>Logout</span>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar