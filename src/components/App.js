import React from 'react';
import CoverPhoto from '../assets/Cover Picture.jpg';
import Logo from '../assets/Logo.png'
import Product1 from '../assets/Product (BESS).png';
import Product2 from '../assets/Product (SOLAR).png';

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
                <div class="cover-text">
                    <h1>ReShine Renewables</h1>
                </div>
                <img class="cover-photo" src={CoverPhoto} alt="microgrid renewable energy" />
            </div>

            <div class="grid-container white-blue">
                <div class="grid">
                    <div class="grid-item">
                        <img src="./src/assets/BESS (Acentech).jpg" alt="alt" />
                    </div>
                    <div class="grid-item text-container">
                        <div class="text-section">
                            <h2>Testing 1</h2>
                            <p>ipiscididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button class="learn-more">Learn More</button>
                        </div>
                    </div>
                    <div class="grid-item text-container">
                        <div class="text-section">
                            <h2>Testing 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button class="learn-more">Learn More</button>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src="./src/assets/AeroFarms-Vertical-Farm-212-Rome-Interior-1-1280x720.png" alt="test" />
                    </div>
                    <div class="grid-item">
                        <img src="./src/assets/energies-15-04062-g001 Microgrid.png" alt="test" />
                    </div>
                    <div class="grid-item text-container">
                        <div class="text-section">
                            <h2>Microgrid with BMS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button class="learn-more">Learn More</button>
                        </div>
                    </div>

                </div>
            </div>

            <div class="section product">
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
                        <a href="#"><img src={Product1} alt="test" /></a>
                        <div class="text-section"><p>test</p></div>
                    </div>
                    <div class="section-item">
                        <a href="#"><img src={Product1} alt="test" /></a>
                        <div class="text-section"><p>test</p></div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">
                    <h2>Market</h2>
                </div>
                <div class="section-flex">
                    <div class="section-item">
                        <img src="./src/assets/energies-15-04062-g001 Microgrid.png" alt="test" />
                    </div>
                    <div class="section-item">
                        <img src="./src/assets/energies-15-04062-g001 Microgrid.png" alt="test" />
                    </div>
                </div>
            </div>

            <footer>footer</footer>
        </div>
    )
};


export default App;