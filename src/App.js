import React from 'react';
import "./App.css"

import {Article, Brand, CTA, Feature, Navbar} from "./components";
import {Footer, Blog, Possibility, Features, WhatGOT3, Header} from "./containers"

const App = () => {
    
    return (
        <div className='App'> 
            <div className='gradient__bg'>
                <Navbar/>
            </div>
        </div>
    )
}

export default App
