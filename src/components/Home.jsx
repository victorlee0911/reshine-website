import React from 'react';

import Navbar from './Navbar';
import Cover from './Cover';
import Product from './Product';
import Features from './Features';
import Market from './Market';
import Brochure from './Brochure';
import Footer from './Footer'

function Home (){
    return (
        <div class="layout">
            
            <Navbar />
            <Cover />
            <Features />
            <Product />
            <Market />
            <Brochure />
            

            <Footer />
        </div>
    )
};


export default Home;