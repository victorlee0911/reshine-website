import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Contact from './Contact';
import About from './About';


function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home tab="home" />} />
                    <Route path="about" element={<About /> } />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};


export default App;