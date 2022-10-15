import React from 'react';

export default class Footer extends React.Component {
      
    render() {
    var style = {
        color: 'white',
        backgroundColor: 'black',
        textAlign: 'center',
        fontSize: '0.75vw',
        paddingTop: '4vh',
        height: '10%',
        paddingBottom: '2vh',
    };
    
    return <div style={style} className="footer">
        © {new Date().getFullYear()}, Designed and built by Liam Corley
      </div>;
    }
}
