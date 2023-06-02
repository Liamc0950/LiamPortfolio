import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

import { StaticQuery, graphql } from "gatsby"

export default function DevLanding() {
  return (
    <StaticQuery
      query={graphql`
        query LandingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      
      render={data => (
        <Fade>
          <div className='devLanding'>
          {/* <canvas id="mainCanvas" width="100vw" height="100vh"></canvas> */}
                <section id="header" className="devHeader">
                  <header>
                    <div className='typewriter'>
                      <h1 className='typeText'>LIAM CORLEY</h1>
                    </div>
                    <h5>Web Developer</h5>
                  </header>
                  <footer>
                    <a href="#banner" className="button style3 scrolly-middle">About Me</a>
                  </footer>
                </section>
          </div>
        </Fade>
      )}
    />
    )
  }
  