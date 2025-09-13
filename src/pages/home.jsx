import React from 'react';
import './home.css';
import Hero from '../components/home components/herosection';
import Slider from '../components/Reusable components/slider';

function Home() {
    return (
        <div className='homewindow'>
            <Hero />
            <Slider />
        </div>
    )
}

export default Home;