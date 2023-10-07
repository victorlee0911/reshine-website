import React, { useState } from 'react';
import Product1 from '../assets/Product (Microgrid).png';
import Product2 from '../assets/Product (BESS).png';
import Product3 from '../assets/Product (Solar).png';
import Product4 from '../assets/Product (Horticultural).png';
import ProductCardActive from './ProductCardActive';
import ProductCardSection from './ProductCardSection';

const cards = [
    {
        id: 0, 
        image: Product1,
        alt: "photo of microgrid",
        title: "Microgrid",
        list: [
            "Smart and integrated BMS, PCS, and EMS systems with user friendly software and mobile app control",
            "State-of-the-Art power electronics, high efficiency DCDC and DCAC conversion and coupling, advanced air and liquid cooling solutions",
            "High quality tier-1 batteries, advanced Reshine BMS with active balancing technology",
            "High quality and high efficiency solar energy solutions",
            "High efficiency, multi-color LED farming solutions."] 

    },
    {
        id: 1, 
        image: Product2,
        alt: "photo of battery energy storage",
        title: "BESS",
        list: [
            "Long battery lifetime (>12000 cycles)",
            "High energy density (3.44MWh, 20 feet container)",
            "Advanced Reshine BMS technology with active battery balancing",
            "Enhanced safety and water-proof optional",
            "50% reduction in installation and PCS DCDC compatible",
            "Modular design enables easy capacity expansion upgrade",
            "LCOE > 50% reduction"] 

    },
    {
        id: 2, 
        image: Product3,
        alt: "photo of solar panels",
        title: "Solar Panels",
        list: [
            "Bifacial technology enables additional energy harvesting from the rear side (up to 25%).",
            "Excellent low irradiance performance",
            "Better light trapping and current collection to improve module power output and reliability",
            "Industry leading lowest thermal coefficient of power.",
            "Optimized electrical design and lower operating current for reduced hot spot loss and better temperature coefficient. Certified to with stand: wind load (2400 Pa) and snow load (5400 Pa).",
            "100% triple EL test enables remarkable reduction of module hidden crack rate."]

    },
    {
        id: 3, 
        image: Product4,
        alt: "photo of Horticultural Lighting",
        title: "Horticultural Lighting",
        list: ["first", "second"]

    }    
]

function Product () {

    const [activeCard, setActiveCard] = useState(-1);

    return (
        <div class="section product blue">
            <div class="section-title">
                <h2>Products</h2>
            </div>
            <ProductCardSection
                cards = {cards}
                activeCard = {activeCard}
                updateCard = {(idx) => setActiveCard(idx)}
            />
            
        </div>
    );
}

export default Product;