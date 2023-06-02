import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'
import * as styles from './projects.module.css'
import Fade from 'react-reveal/Fade'; 
import { Link, Button } from "gatsby"





export default function Projects() {
  
  const[webVisible, setWebVisible] = useState(true);
  const[appVisible, setAppVisible] = useState(false);

  function toggleWebDev(){
    setAppVisible(false);
    setWebVisible(true);
  }  
  function toggleApp(){
    setWebVisible(false);
    setAppVisible(true);
  }  

  return (
    <StaticQuery
      query={graphql`
        query ProjectQuery {
          site {
            siteMetadata {
              title
            }
          }
          allContentfulWebProject(sort: {fields: sortOrder, order: ASC}) {
            edges {
              node {
                link
                title
                coverImage{
                  gatsbyImageData(
                    layout: CONSTRAINED, 
                    placeholder: BLURRED,
                    quality: 90,
                  )
                }
              }
            }
          }
          allContentfulAppProject(sort: {fields: sortOrder, order: ASC}) {
            edges {
              node {
                link
                title
                coverImage{
                  gatsbyImageData(
                    layout: CONSTRAINED, 
                    placeholder: BLURRED,
                    quality: 90,
                  )
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Fade bottom>
          <section id="projects" className='devProjects'>
            <header className={styles.projectsHeader}>
              <h2>PROJECTS</h2>
              <button onClick={toggleWebDev} className="button styleDevProj scrolly" style={{ backgroundColor: webVisible ? "white" : "gray"}}>Websites</button>
              <button onClick={toggleApp}className="button styleDevProj scrolly" style={{ backgroundColor: appVisible ? "white" : "gray" }}>Lighting Tools</button>
            </header>
            { webVisible ?
              <Row className="g-0" id="web">
                {data.allContentfulWebProject.edges.map(webProj=>(
                    <Col lg={6} md = {6} sm = {12}>
                      <Fade>
                      <div className={styles.wrapper}>
                        <a href={"http://" + webProj.node.link}>
                          <GatsbyImage image={webProj.node.coverImage.gatsbyImageData} alt={'alt text'}/>
                          <div className={styles.overlay}>
                            <div className={styles.title}>
                              <h6 className='text-light'>{webProj.node.title}</h6>
                            </div>
                          </div>
                        </a>
                      </div>
                      </Fade>
                    </Col>
                ))}
              </Row>
            : null
            }
            { appVisible ?
              <Row className="g-0" id="web">
                {data.allContentfulAppProject.edges.map(appProj=>(
                    <Col lg={6} md = {6} sm = {12}>
                      <Fade>
                      <div className={styles.wrapper}>
                        <a href={"http://" + appProj.node.link}>
                          <GatsbyImage image={appProj.node.coverImage.gatsbyImageData} alt={'alt text'}/>
                          <div className={styles.overlay}>
                            <div className={styles.title}>
                              <h6 className='text-light'>{appProj.node.title}</h6>
                            </div>
                          </div>
                        </a>
                      </div>
                      </Fade>
                    </Col>
                ))}
              </Row>
            : null
            }

          </section>
        </Fade>
      )}
    />
  )
}
