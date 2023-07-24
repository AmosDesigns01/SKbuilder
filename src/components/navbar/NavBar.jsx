import "./NavBarStyles.css";
import SkLogo from "../../assests/sklogo.png";
import { Link } from "react-router-dom";

import React, {useState} from 'react'

const NavBar = () => {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 50){
      setColor(true);
    } else {
      setColor(false);
    }
  }

  // hamburger state.
  const [clicked, setClicked] = useState(false);
  const handleCLick = () => {
    setClicked(!clicked);
  }

  window.addEventListener("scroll", changeColor)
  return (
    <div className={color? "NavBarItems NavBarItems-bg" : "NavBarItems"}>
        {/* logo */}
        <img className="nav-logo" src={SkLogo} alt="skbuilder logo" />

            <ul className= {clicked? "nav-menu" : "nav-menu down"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Properties</Link></li>
                <li><Link to="/">Buy <i class="fa-solid fa-angle-down"></i></Link></li>
                <li><Link to="/">Sell <i class="fa-solid fa-angle-down"></i></Link></li>
                <li><Link to="/">Rent <i class="fa-solid fa-angle-down"></i></Link></li>
            </ul>

            <ul className={clicked? "nav-menu-btn" : "nav-menu-btn down"}>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/" className="getstarted">Get Started</Link></li>
            </ul>

            <div className="hamburger" onClick={handleCLick}>
              {clicked? 
                <i class="fa-solid fa-xmark"></i> : 
                  <i class="fa-solid fa-bars-staggered"></i>}
            </div>
    </div>
  )
}

export default NavBar