
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import './navbar.css';
import { IconContext } from 'react-icons/lib'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize',showButton);
    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="Navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Last.fm
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/searchSong" className="nav-links">
                            Find song
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Navbar