import React from 'react';
import Feature1 from '../assets/Customer.png'
import Feature2 from '../assets/Product (Microgrid).png'
import Feature3 from '../assets/Product (BESS).png';

function Features () {
    return (
        <div class="grid-container white-blue">
            <div class="grid">
                <div class="grid-item">
                    <img src={Feature1} alt="alt" />
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
                    <img src={Feature2} alt="test" />
                </div>
                <div class="grid-item">
                    <img src={Feature3} alt="test" />
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
    );
}

export default Features;