import React from 'react'
import {Button} from '../Button'
import './Footer.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './../JustLogo.svg'

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Rejoignez nous et recevez nos meilleur offres par newsletter
                </p>
                <p className="footer-subscription-text">
                    Vous pouvez vous désinscrire à tout moment.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Votre Email"
                        className="footer-input"/>
                        <Button buttonStyle='btn--outline'>C'est partie</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>A propos</h3>
                        <Link to='/sign-up'>Comment ça fonctionne</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/testimonials'>Temoignages</Link>
                        <Link to='/cgservice'>Termes des services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h3>Nous Contactez</h3>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Evenements</Link>
                        <Link to='/'>Termes des services</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>Blogs</h3>
                        <Link to='/'>Articles recents</Link>
                        <Link to='/'>Un article</Link>
                        <Link to='/'>Un Temoignages</Link>
                        <Link to='/'>Termes des services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h3>Media Sociaux</h3>
                        <Link to='/'>Instagram </Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    Escale Relax
                    <Logo width='150px' className='footer__logo-icon' alt='logo-escale-relax' />
                    </Link>
                </div>
                <small className='website-rights'>Monwebdev © 2020</small>
                <div className='social-icons'>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <FaFacebook />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <FaInstagram />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to={
                        '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                    }
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <FaYoutube />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <FaTwitter />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <FaLinkedin />
                    </Link>
                </div>
                </div>
            </section>

            
        </div>
    )
}

export default Footer
