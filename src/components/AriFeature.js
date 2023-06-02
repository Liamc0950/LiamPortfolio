import React from 'react';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect


export default class AriFeature extends React.Component {
    render(){
        return(
          <Fade bottom>
            <article id="first" className="container box style1 right">
              <a href="www.arianddee.com" className="image fit"><img src="http://localhost:3000/src/images/AriScreenShot.png" alt="" /></a>
              <div className="inner">
                <header>
                  <h2>AriAndDee.com</h2>
                </header>
                <img src="images/AriScreenShot.png" alt="hello" />
                <p>Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia pellentesque eleifend vitae est elit tristique velit tempus etiam.</p>
              </div>
            </article>
          </Fade>
        );
      }
    }
    