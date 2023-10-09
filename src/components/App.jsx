import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';


function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home tab="home" />} />
                    <Route path="about" element={<Home /> } />
                    <Route path="contact" element={<h1>contact</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};


export default App;