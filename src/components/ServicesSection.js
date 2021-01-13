import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.js'

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headLine,slug, description,
    buttonLabel,img, alt, imgStart, prestaSlug, prestations, tart, presta, category, price, desc, name,
}) {
    return (<>
            <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row hom__hero-row" 
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">
                                    {topLine}
                                </div>
                                <h2 className={lightText ? 'heading' : 'heading dark'}>{headLine} à domicile</h2>
                                <ul className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                         {prestaSlug.map((service,index) => {
                                            return(<li>{service}</li>)
                                        })}
                                    </ul>
                                <Link to={`services/${slug}`}>
                                    <Button buttonSize='btn--wide' buttonColor='gold'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>);
}

export default HeroSection
