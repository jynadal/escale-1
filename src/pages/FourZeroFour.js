import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/footer/Footer'
import {Link} from 'react-router-dom'

function FourZeroFour() {
    return (
        <>
             <Hero>
                <Banner title="404"
                    subtitle="Oops ESCALE 1, la page que vous recherchez n'est pas ici. Essayez à l'accueil ...">
                    <Link to="/" className="btn-primary" >
                        Accueil
                    </Link>
                </Banner>
            </Hero>
            <Footer />  
            
        </>
    )
}

export default FourZeroFour
