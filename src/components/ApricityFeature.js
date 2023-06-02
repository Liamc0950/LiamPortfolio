import React from 'react';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect


export default class ApricityFeature extends React.Component {
    render(){
        return(
          <Fade bottom>
            <article id="first" className="container box style1 right">
              <a href="#" className="image fit"><img src="images/pic01.jpg" alt="" /></a>
              <div className="inner">
                <header>
                  <h2>Apricity.art</h2>
                </header>
                <p>Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia pellentesque eleifend vitae est elit tristique velit tempus etiam.</p>
              </div>
            </article>
          </Fade>
        );
      }
    }
    