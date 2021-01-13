import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './JustLogo.svg'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize  } from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import { Button } from './Button'
import './Pricing.css'


function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff', size:64}}>
        {/* <div>
            <div className="pricing__section">
                    <h1 className="pricing__heading">Nos Prestations</h1>
                    <Logo width='150px' className='logo-icon' alt='logo-escale-relax' />
                    <h5 className="pricing__headingFive">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere libero
                         nesciunt autem reiciendis ullam qui, voluptatibus sint vel, ipsum dolorum.</h5>
                */}
                <div className="pricing__wrapper">
                        <div className="pricing__container">
                            
                            <Link to="services/epilations" 
                            className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                    <BsXDiamondFill color='goldenrod' />
                                    </div>
                                    <h3>Epilations</h3>
                                    <p>à partir de</p>
                                    <h4>47€</h4>
                                    <ul className="pricing__container-features">
                                        <li>Maillot simple</li>
                                        <li>Demi-jambes</li>
                                        <li>Demi-bras</li>
                                        <li>Modelage apaisant</li>
                                    </ul>
                                    <Button buttonStyle="btn--wide" buttonColor='gold'>
                                    Savoir +
                                    </Button>
                                </div> 
                            </Link>

                            <Link to="services/manucure" 
                            className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                    <FaFire color='goldenrod' />
                                    </div>
                                    <h3>Mains & Pieds</h3>
                                    <p>à partir de</p>
                                    <h4>22€</h4>
                                    <ul className="pricing__container-features">
                                        <li>Manucure express</li>
                                        <li>Manucure express</li>
                                        <li>Pose de vernis</li>
                                        <li>Pose de vernis</li>
                                    </ul>
                                    <Button buttonStyle="btn--wide" buttonColor='gold'>
                                        Savoir +
                                    </Button>
                                </div> 
                            </Link>

                            <Link to="services/soins" 
                            className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                    <GiCrystalize color='goldenrod'/>
                                    </div>
                                    <h3>Les Soins</h3>
                                    <p>à partir de</p>
                                    <h4>30€</h4>
                                    <ul className="pricing__container-features">
                                        <li>Modelage corps</li>
                                        <li>Soins relaxants</li>
                                        <li>Détente</li>
                                        <li>Bien-être</li>
                                    </ul>
                                    <Button buttonStyle="btn--wide" buttonColor='gold'>
                                    Savoir +
                                    </Button>
                                </div> 
                            </Link>


                        </div>
                   
                </div>
            
            {/* </div>
        </div> */}
        </IconContext.Provider>
    )
}

export default Pricing
