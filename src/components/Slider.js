import React,{useState} from 'react';
import styles from './slider.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'



function Slider(props){

    let chevStyles = {
        fontSize: 1.8 + "vw",
        color: "white"
    }



    //Array of components
    // let sliderArr = [<ImageSlide src={i1} title="Cabaret" position="Lighting Design"></ImageSlide>, 
    //                  <ImageSlide src={i2} title="Cabaret" position="Lighting Design"></ImageSlide>, 
    //                  <ImageSlide src={i3} title="Cabaret" position="Lighting Design"></ImageSlide>];

    let sliderArr = props.items;

    const [x, setX] = useState(0);
    const goLeft = () =>{
        (x===0)?setX((-100 * (sliderArr.length-1))):setX(x+100);
    };
    const goRight = () =>{
        (x===(-100 * (sliderArr.length-1)))?setX(0):setX(x-100);
    };

    return(
        <div className={styles.slider}>
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className={styles.slide} style={{ transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" className={styles.button} onClick={goLeft}>
                <FontAwesomeIcon icon={faChevronLeft} size="2x" color="rgba(255,255,255,0.5)"/>
            </button>
            <button id="goRight" className={styles.button} onClick={goRight}>
                <FontAwesomeIcon icon={faChevronRight} size="2x" color="rgba(255,255,255,0.5)"/>
            </button>
        </div>
    )
}

export default Slider;