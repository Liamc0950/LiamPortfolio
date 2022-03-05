import React from 'react';

export default class Footer extends React.Component {
      
    render() {
    var style = {
        color: 'white',
        textAlign: 'center',
        fontSize: '1vw',
        paddingTop: '2vh',
        height: '65px',
        paddingBottom: '1.5vh',    
    };
    
    return <div style={style}>
        © {new Date().getFullYear()}, Designed and built by Liam Corley
      </div>;
    }
}
