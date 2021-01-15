import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroB.css';

function HeroB() {
    return (
        <div className='hero-container'>
            <video src='/Videos/Clouds-2.mp4' autoPlay loop muted />
            <h1>La beauté vient à ESCALE 1</h1>
            <p>A vous d'en profitez!</p>
            <div className="hero-btns">
                <Button className='btn' buttonStyle='btn--outline'
                    buttonSize='btn--large'>GET STARTED
                </Button>
                <Button className='btn' buttonStyle='btn--primary'
                    buttonSize='btn--large'>WATCH TRAILER
                    <i className='far fa-play-circle' />
                </Button>
            </div>
            
        </div>
    )
}

export default HeroB
