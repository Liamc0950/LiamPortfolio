import React, { useState } from 'react';
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default class Footer extends React.Component {
      
    render() {
    var style = {
        color: 'white',
        textAlign: 'center',
        fontSize: '0.7vw',
        paddingTop: '2.5vh',
        marginTop: '5%',
        paddingBottom: '2.5vh'
    };
    
    return <div style={style}>
        <div>Designed and built by Liam Corley</div>
      </div>;
    }
}
