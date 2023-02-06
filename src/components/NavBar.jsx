import React from 'react';
import "../NavBar.css";

function navbar() {
  return (
    <nav className='nav'>
        <a href='#' className='naziv'>FarAway</a>
        <ul className='nav_menu'>
            <li className='nav_iteam'><a href="#" className='nav_link'>Home</a></li>
            <li className='nav_iteam'><a href="#" className='nav_link'>Iskustva</a></li>
        </ul>
    </nav>
  )
}

export default navbar
