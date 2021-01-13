import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './JustLogo.svg'
import './HeroSection.css'
import Cards from './card/Cards'
import Testimonial from './testimonial/Testimonial2'
import Pricing from './Pricing'

function HeroSection({
    lightBg,title, headingFive, topLine, lightText, lightTextDesc, headLine, description, description2,
    buttonLabel, img, alt, imgStart, HeroCard, OriginalHero
}) {
    return (<>
            <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="hero-section__container">
                    <h1 className="hero-section__heading">{title}</h1>
                        <Logo width='150px' className='logo-icon' alt='logo-escale-relax' />

                        <h5 className="hero-section__headingFive">{headingFive}</h5>

 
                    {(() => {
                        switch (HeroCard) {
                            case 'Pricing':
                                return <Pricing />                                
                                break;
                            case 'Cards':
                                return <Cards />                                
                                break;
                            case 'Testimonial':
                                return <Testimonial />                                
                                break;
                        
                            default:
                                return (<div className="row home__hero-row" 
                             style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                                 <div className="col">
                                     <div className="home__hero-text-wrapper">
                                         <div className="top-line">
                                             {topLine}
                                         </div>
                                         <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                         <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                         <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description2}</p>
                                         <Link to="/services">
                                             <Button buttonSize='btn--wide' buttonColor='gold'>{buttonLabel}</Button>
                                         </Link>
                                     </div>
                                 </div>
                                 <div className="col">
                                     <div className="home__hero-img-wrapper">
                                         <img src={img} alt={alt} className="home__hero-img"/>
                                     </div>
                                 </div>
                             </div>
                            )
                                break;
                        }
                    })()}

                        {/* {OriginalHero ? 
                             <div className="row home__hero-row" 
                             style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                                 <div className="col">
                                     <div className="home__hero-text-wrapper">
                                         <div className="top-line">
                                             {topLine}
                                         </div>
                                         <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                         <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                         <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description2}</p>
                                         <Link to="/sign-up">
                                             <Button buttonSize='btn--wide' buttonColor='gold'>{buttonLabel}</Button>
                                         </Link>
                                     </div>
                                 </div>
                                 <div className="col">
                                     <div className="home__hero-img-wrapper">
                                         <img src={img} alt={alt} className="home__hero-img"/>
                                     </div>
                                 </div>
                             </div>
                             
                        : 
                        (<Cards />)
                        
                         } */}
                           
                </div>
            </div>
            
        </>);
}

export default HeroSection
