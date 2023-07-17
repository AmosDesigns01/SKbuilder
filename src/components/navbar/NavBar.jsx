import "./NavBarStyles.css";
import SkLogo from "../../assests/sklogo.png";
import { Link } from "react-router-dom";

import React, {useState} from 'react'

const NavBar = () => {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor)
  return (
    <div className={color? "NavBarItems NavBarItems-bg" : "NavBarItems"}>
        {/* logo */}
        <img className="nav-logo" src={SkLogo} alt="skbuilder logo" />

            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Properties</Link></li>
                <li><Link to="/">Buy <i class="fa-solid fa-angle-down"></i></Link></li>
                <li><Link to="/">Sell <i class="fa-solid fa-angle-down"></i></Link></li>
                <li><Link to="/">Rent <i class="fa-solid fa-angle-down"></i></Link></li>
            </ul>

            <ul className="nav-menu-btn">
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/" className="getstarted">Get Started</Link></li>
            </ul>
    </div>
  )
}

export default NavBar