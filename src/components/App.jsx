import React from 'react';
import CoverPhoto from '../assets/Cover Picture.jpg';
import Logo from '../assets/Logo Transparent.png'
import OutdoorFarming from '../assets/Farming Outdoor.jpg';
import IndoorFarming from '../assets/Farming Indoor.png'

import Product from './Product';
import Features from './Features';


function App (){
    return (
        <div class="layout">
            <div class="nav-bar">
                <a href="./index.html">
                    <img class="logo" src={Logo} alt="WeShine Logo" />
                </a>
                <ul class="links">
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </div>

            <div class="cover-section white-blue">
                <img class="cover-logo" src={Logo} alt="Reshine Logo" />
                <img class="cover-photo" src={CoverPhoto} alt="microgrid renewable energy" />
            </div>

            <Features />

            <Product />
            

            <div class="section white-blue">
                <div class="section-title">
                    <h2>Market</h2>
                </div>
                <div class="section-flex">
                    <div class="section-item">
                        <img src={OutdoorFarming} alt="test" />
                    </div>
                    <div class="section-item">
                        <img src={IndoorFarming} alt="test" />
                    </div>
                </div>
            </div>

            <footer>footer</footer>
        </div>
    )
};


export default App;