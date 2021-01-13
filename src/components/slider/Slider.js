import React, {useState} from 'react';
import './Slider.scss';
import ImgComp from './ImgComp';
import I1 from './../../Images/slider/anna_sh_1920.jpg'
// import I1 from './../assets/images/slider/anna_sh_1920.jpg'
import I2 from './../../Images/slider/elly_1920.jpg'
import I3 from './../../Images/slider/ModelCactus_1920.jpg'
import I4 from './../../Images/slider/pool_1920.jpg'


function Slider() {
    
let sliderArr = [
    <ImgComp src={I4} title={"Relax chez vous"} text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum"} text2={"massa.lorem ipsum dolor sit amet,consectetur adipicing elit."} />,
    <ImgComp src={I2} title={"Titre 2"} text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum"} text2={"massa.lorem ipsum dolor sit amet,consectetur adipicing elit."} />,
    <ImgComp src={I3} title={"Esthéticienne et produits de qualité"} text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum"} text2={"massa.lorem ipsum dolor sit amet,consectetur adipicing elit."} />,
    <ImgComp src={I1} title={"soins beauté entre amis!"} text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum"} text2={"massa.lorem ipsum dolor sit amet,consectetur adipicing elit."} />,
    
    // {title:'', url:'', text:''}
]
const [x, setX]= useState(0);
const goLeft=() => {
   
    (x === 0 ? setX(-100 * (sliderArr.length-1)) : setX(x + 100))
};
const goRight=() => {
    console.log(x);
    (x === (-100 * (sliderArr.length-1)) ? setX(0) : setX(x - 100))
};

    return(
        <div className="slider">
            {sliderArr.map((item,index) =>{
                return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                            
                        </div>
                )
            })}
            <button id="goLeft"  onClick={goLeft}><i class="fas fa-chevron-left"></i></button>
            <button id="goRight" onClick={goRight}><i class="fas fa-chevron-right"></i></button>
        </div>
    );
}
export default Slider;