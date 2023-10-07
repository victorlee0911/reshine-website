import React from 'react';
import OutdoorFarming from '../assets/Farming Outdoor.jpg';
import IndoorFarming from '../assets/Farming Indoor.png';

function Market () {
    return (
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

    );
}

export default Market;
