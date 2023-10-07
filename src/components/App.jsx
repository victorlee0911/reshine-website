import React from 'react';

import Navbar from './Navbar';
import Cover from './Cover';
import Product from './Product';
import Features from './Features';
import Market from './Market';


function App (){
    return (
        <div class="layout">
            
            <Navbar />
            <Cover />
            <Features />
            <Product />
            <Market />
            

            <footer>footer</footer>
        </div>
    )
};


export default App;