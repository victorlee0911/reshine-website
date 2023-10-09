import React from 'react';

import Cover from './Cover';
import Product from './Product';
import Features from './Features';
import Market from './Market';
import Brochure from './Brochure';

function Home (){
    return (
        <div class="layout">
            <Cover />
            <Features />
            <Product />
            <Market />
            <Brochure />
        </div>
    )
};


export default Home;