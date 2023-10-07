import React from 'react';
import Logo from '../assets/Logo Transparent.png';

function Navbar () {
    return (
        <div class="nav-bar">
            <a href="./">
                <img class="logo" src={Logo} alt="WeShine Logo" />
            </a>
            <ul class="links">
                <li><a href="./about.html">About</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </div>

    );
}

export default Navbar;
