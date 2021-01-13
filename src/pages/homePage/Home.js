import React from 'react'
import HeroSection from '../../components/HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree,
     homeObjFour, homeObjFive} from './Data'
import Footer from '../../components/footer/Footer'
import Pricing from '../../components/Pricing'
//import Hero from '../../components/Hero'
//import Slider from '../../components/slider/Slider'
import Banner from '../../components/Banner'
import HeroB from '../../components/hero/HeroB'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial2 from '../../components/testimonial/Testimonial2'
import Cards from '../../components/card/Cards'





function Home() {
    return (
        <>
        
        <HeroB />

        {/* <Slider>
            <Banner title="Bienvenue dans notre boutique en ligne"
                    subtitle="Vous trouverez tous vos thé et café">
                    <Link to="/articles" className="btn-primary" >
                        Nos articles
                    </Link> 
            </Banner>
        </Slider>        */}
        <HeroSection {...homeObjOne} />           
        <HeroSection {...homeObjTwo} />   
        <HeroSection {...homeObjThree} />           
        <HeroSection {...homeObjFour} /> 
        <HeroSection {...homeObjFive} /> 
        
        <Footer />         
        </>
    )
}

export default Home
