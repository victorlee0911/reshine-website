import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home tab="home" />} />
                <Route path="/about" element={<Home /> } />
                <Route path="/contact" element={<h1>contact</h1>} />
            </Routes>
        </BrowserRouter>
    )
};


export default App;