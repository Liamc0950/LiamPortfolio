import React from 'react';
import styles from './imageSlide.module.css'
import { Link } from 'gatsby'


function ImageSlide(props){
    let imgStyles = {
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 100 + "%",
        height: 100 + "%",
    }

    const link = "/shows/" + props.title + "/";

    return(
        <div style={imgStyles}>
            <div className={styles.spacerTop}></div>
            <div className={styles.captions}>
                <Link className={styles.captionLink} to={link}>
                    <span className={styles.showTitle} className={styles.box}>{props.title}</span>
                    <br/>
                    <span className={styles.showPosition}className={styles.box}>{props.position}</span>
                </Link>
            </div>
        </div>
    );
}

export default ImageSlide;