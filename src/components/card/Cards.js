import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Bienvenue sur notre nouveau site web</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="../../Images/about/about1.jpg"
                        text="Bienvenue sur le nouveau site d'Escale Relax"
                        label="News"
                        path="/blog"
                        />
                        <CardItem 
                        src="../../Images/about/1.jpg"
                        text="Bienvenue sur le nouveau site d'Escale Relax"
                        label="News"
                        path="/blog"
                        />
                    </ul>

                </div>
            </div>
            
        </div>
    )
}

export default Cards
