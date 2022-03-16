import {NavLink} from 'react-router-dom'

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
                <NavLink href="#" className="NavLink" to="/">
                <span className='icon'>
                <ion-icon name="football"></ion-icon>
                </span>
                <span className='text'>Leagues</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/">
                <span className='icon'>
                <ion-icon name="log-in"></ion-icon>
                </span>
                <span className='text'>Signup</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/">
                <span className='icon'>
                <ion-icon name="log-in"></ion-icon>
                </span>
                <span className='text'>Login</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/">
                <span className='icon'>
                <ion-icon name="person-circle"></ion-icon>
                </span>
                <span className='text'>Profile</span>
                </NavLink>
            </li>
            <li className='list'>
                <NavLink href="#" className="NavLink" to="/">
                <span className='icon'>
                <ion-icon name="log-out"></ion-icon>
                </span>
                <span className='text'>Logout</span>
                </NavLink>
            </li>
            <div className='indicator'></div>
        </ul>
    </div>
  )
}

export default Navbar