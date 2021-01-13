import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/Hero'
import HeroSection from '../../components/HeroSection'
import ServicesSection from '../../components/ServicesSection'
//import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree,
    homeObjFour, homeObjFive} from './Data'
import Banner from '../../components/Banner'
import CardItem from '../../components/card/CardItem'

function Services() {
    return (
        <>
            <Hero>
                <Banner title="Nos prestations beauté à domicile"
                    subtitle="Epilation, manucures, pédicure, soins beauté, ...">
                    {/* <Link to="/articles" className="btn-primary" >
                        Nos articles
                    </Link> */}
                </Banner>
            </Hero>
            <HeroSection className="blog" {...homeObjFive} /> 

            <div className="cards">
                <div className="cards__container">
                <div className="cards__wrapper">

                    <ul className="cards__item blog">
                    <CardItem 
                    src="../../Images/about/1.jpg"
                    text="Bienvenue sur le nouveau site d'Escale Relax"
                    label="News"
                    path="/blog"
                    />  
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
           
            <Footer />            
        </>
    )
}

export default Services
