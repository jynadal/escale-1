import React from 'react'
import {useParams} from 'react-router'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/Hero'
//import ServicesSection from '../../components/ServicesSection'

import { serviceObjOne, serviceObjTwo,
     serviceObjThree,
    //  serviceObjFour, serviceObjFive, serviceObjSix
     //, serviceObjSeven
    } from './Data'
import Banner from '../../components/Banner'
import "./ServiceDetail.css"


function ServiceDetail() {

    const {slug} = useParams();
    //let slug = match.params.slug;
    let prestation = serviceObjOne;

    if (slug === "epilations") {
                
        prestation = serviceObjOne
        
    } else if (slug === "soin_visage") {

        prestation = serviceObjTwo
        
    } else if (slug === "modelage_corp") {

        prestation = serviceObjThree
        
    } 
    //else if (slug === "soin_corps") {

    //     prestation = serviceObjFour
        
    // } else if (slug === "beaute_mains_pieds") {

    //     prestation = serviceObjFive
        
    // }

    return (
        <>
            <Hero>
                <Banner title={`Nos prestations ${prestation.headLine} à domicile`}
                    subtitle="Epilation, manucures, pédicure, soins beauté, ...">
                    {/* <Link to="/articles" className="btn-primary" >
                        Nos articles
                    </Link> */}
                </Banner>
            </Hero>
            <div className="container">
                
                <h1>{prestation.headLine}</h1>

                <h5 className="prestations__list">Nos Prestations</h5>
                  <div className="row">
                    <div className="col">
                    <ul className="prestations">
                        {prestation.prestations.map((item,index)=>{
                            return(<li key={index}>{item}</li>)
                        })
                    }
                    </ul>   
                    </div>
                    <div className="col img">
                        {/* <img src="../../../Images/common.serviette.png" alt=""/> */}
                    </div>
                </div> 

            </div>

            <img src="../../../Images/test-bg-2.png" alt=""/>
            <div className="prestation__prestaSlug">
                <ul>
                {prestation.prestaSlug.map((presta,index) =>{
                    return(<h5><li key={index}>{presta}</li></h5>)
                })}
                </ul>              
                
            </div>
            <div className="prestation__description">
                <h6>Détails des prestations</h6>
                <p>{prestation.description} {prestation.description} {prestation.description} {prestation.description} {prestation.description}
                {prestation.description} {prestation.description} {prestation.description} {prestation.description} {prestation.description}
                {prestation.description} {prestation.description} {prestation.description} {prestation.description} {prestation.description}
                {prestation.description} {prestation.description} {prestation.description} {prestation.description} {prestation.description}
                {prestation.description} {prestation.description} {prestation.description} {prestation.description} {prestation.description}</p>

            </div>
            <Footer />            
        </>
    )
}

export default ServiceDetail
