import "../App.css";
import hamburgerIcon from "../images/icons8-hamburger-menu-60.png";
import closeIcon from "../images/close.png";
import defaultProfileIcon from "../images/profile.jpg";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='d-flex align-center'>
      <a href='index.html'>TheBloggr.</a>
      <img
        src={hamburgerIcon}
        onClick={() => setShowMenu(!showMenu)}
        className='hamburger'
        alt=''
      />
      <ul
        className={
          showMenu ? "d-flex align-center show-menu" : "d-flex align-center"
        }>
        <img
          src={closeIcon}
          onClick={() => setShowMenu(!showMenu)}
          className='menu-close'
          alt=''
        />
        <li>
          <a href='index.html'>Home</a>
        </li>
        <li>
          <a href='myfeed.html'>My Feed</a>
        </li>
        <li>
          <a href='createblog.html'>Create a Blog</a>
        </li>
        <li>
          <a href='dashboard.html'>
            <img src={defaultProfileIcon} alt='dashboard' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
