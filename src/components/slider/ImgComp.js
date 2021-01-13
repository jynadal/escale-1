import React from 'react'
import {Link} from 'react-router-dom'

function ImgComp({src,title,text1,text2,link}) {
    let imgStyles = {
        width: 100 +"%",
        height: "auto"
    }
    return (
        <div>
            <img src={src} alt="slide-image" style={imgStyles}/>

                    <div className="slider-text-table">
                        <div className="slider-text-tablecell">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slide1-text">
                                            <div className="middle-text">
                                                <div className="title-1 wow rotateInDownRight" data-wow-duration="0.9s" data-wow-delay="0s">
                                                    <h1>{title}</h1>
                                                </div>	
                                                <div className="desc wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                                    <p>{text1} <br/> {text2}</p>
                                                </div>
                                                <div className="explore-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                                    <Link to={link}>Savoir plus</Link>
                                                </div>	
                                            </div>	
                                        </div>				
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
            
        </div>
            
    ) 
}

export default ImgComp
