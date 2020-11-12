import React, { useState } from 'react';
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default class Footer extends React.Component {
      
    render() {
    var style = {
        color: 'white',
        textAlign: 'center',
        fontSize: '1.5vw',
        paddingTop: '2.5vh',
        paddingBottom: '2.5vh'
    };
    
    return <div style={style}>
        <div>Designed and built by Liam Corley</div>
      </div>;
    }
}
