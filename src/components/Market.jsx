import React from 'react';
import OutdoorFarming from '../assets/Farming Outdoor.jpg';
import IndoorFarming from '../assets/Farming Indoor.png';
import MarketCard from './MarketCard';

const markets =[
    {
        id: 0,
        image: OutdoorFarming,
        alt: "picture of wheats with net zero text graphic",
        title: "Outdoor Farming",
        list:[
        "Reduce Greenhouse Gas Emission and Carbon Footprint",
        "Enable 100% Renewable Energy and Self-Sufficient Energy System",
        "Improve Energy Efficiency and Reduce High Energy Cost",
        "Operate Independently to Ensure Energy Resiliency/Reliability" ]
    },
    {
        id: 1,
        image: IndoorFarming,
        alt: "organized 3d array structure for farming",
        title: "Indoor Farming",
        list: [
        "Reduce High Energy Cost",
        "Enable Energy on Demand and Lighting Source Energy Continuity",
        "Boost Agricultural cycle Cycle and Increase Productivity",
        "Energy Efficiency and Conservation of Resources",
        "Save Space" ]
    }
]

function createMarketCard (market) {
    return (
        <MarketCard
            img = {market.image}
            alt = {market.alt}
            title = {market.title}
            list = {market.list}
        />
    )
}

function Market () {
    return (
        <div class="section market white-blue">
            <div class="section-title">
                <h2>Market</h2>
            </div>
            
            <div class="section-flex">
                {markets.map(createMarketCard)}
            </div>

        </div>

    );
}

export default Market;
