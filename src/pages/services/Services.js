import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/Hero'
import ServicesSection from '../../components/ServicesSection'
//import HeroSection from '../../HeroSection'
import { serviceObjOne, serviceObjTwo,
     serviceObjThree,
      serviceObjFour, serviceObjFive,
    // serviceObjSix
     //, serviceObjSeven
    } from './Data'
import Banner from '../../components/Banner'




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
            <ServicesSection {...serviceObjOne} />
            <ServicesSection {...serviceObjTwo} />
            <ServicesSection {...serviceObjThree} />
            <ServicesSection {...serviceObjFour} />
            <ServicesSection {...serviceObjFive} />
            {/*<ServicesSection {...serviceObjSix} /> */}
            {/* <ServicesSection {...serviceObjSeven} /> */}
            <Footer />            
        </>
    )
}

export default Services
