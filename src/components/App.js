import React from 'react';
import CoverPhoto from '../assets/Cover Picture.jpg';
import Logo from '../assets/Logo Transparent.png'
import Customer from '../assets/Customer.png'
import Product1 from '../assets/Product (Microgrid).png'
import Product2 from '../assets/Product (BESS).png';
import Product3 from '../assets/Product (Solar).png';
import Product4 from '../assets/Product (Horticultural).png';
import OutdoorFarming from '../assets/Farming Outdoor.jpg';
import IndoorFarming from '../assets/Farming Indoor.png'


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

            <div class="grid-container white-blue">
                <div class="grid">
                    <div class="grid-item">
                        <img src={Customer} alt="alt" />
                    </div>
                    <div class="grid-item text-container">
                        <div class="text-section">
                            <h2>Customer Centered Total Solution</h2>
                            <p>
                                <ul>
                                    <li>Turn-key Solution</li>
                                    <li>Customer Centered Product and Service</li>
                                    <li>Agricultural Support from our Agriculture Advisors</li>
                                    <li>Financing Service from our Partners (EaaS)</li>
                                    <li>Long Term Partnership</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="grid-item text-container">
                        <div class="text-section">
                            <h2>Microgrid + LED Lighting Solutions</h2>
                            <p>
                                <ul>
                                    <li>Advanced Microgrid Technologies</li>
                                    <li>Novel energy management systems combined with  innovative lighting technologies for agriculture</li>
                                </ul> 
                            </p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={Product1} alt="test" />
                    </div>
                    <div class="grid-item">
                        <img src={Product2} alt="test" />
                    </div>
                    <div class="grid-item text-container">
                        <div class="text-section">
                            <h2>Advanced BESS </h2>
                            <p>
                                <ul>
                                    <li>Safe & reliable battery energy storage system with novel active balancing technologies and advanced battery management systems</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="section product blue">
                <div class="section-title">
                    <h2>Products</h2>
                </div>
                <div class="section-flex">
                    <div class="section-item">
                        <a href="#"><img src={Product1} alt="test" /></a>
                        <div class="text-section"><p>test</p></div>
                    </div>
                    <div class="section-item">
                        <img src={Product2} alt="test" />
                        <div class="text-section"><p>test</p></div>
                    </div>
                    <div class="section-item">
                        <a href="#"><img src={Product3} alt="test" /></a>
                        <div class="text-section"><p>test</p></div>
                    </div>
                    <div class="section-item">
                        <a href="#"><img src={Product4} alt="test" /></a>
                        <div class="text-section"><p>test</p></div>
                    </div>
                </div>
            </div>

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