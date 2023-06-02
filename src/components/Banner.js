import React from 'react';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import { Link } from "gatsby"
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import get from 'lodash/get'
import { StaticQuery, graphql } from "gatsby"


export default function Banner() {

  return (
    <StaticQuery
      query={graphql`
        query BannerQuery {
          site {
            siteMetadata {
              title
            }
          }
          allContentfulPerson(
            filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
          ) {
            edges {
              node {
                facebook
                github
                instagram
                title
                image{
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 200
                    cornerRadius: 10
                    height: 300
                    placeholder: BLURRED
                    quality: 50
                    resizingBehavior: FILL
                  )
                }
                email
              }
            }
          }
        }
      `}
      render={data => (
        <Fade bottom>
          <section id="banner" className='devBanner'>
            {/* <header>
              <h2>About</h2>
            </header> */}

            <div className='socials'>
              {data.allContentfulPerson.edges.map(person=>(
                  <Fade>
                    <a href={person.node.facebook} target="_blank">
                      <FaFacebook size="2em" style={{ margin: '5px' }}/>{}
                    </a>
                    <a href={person.node.instagram} target="_blank">
                      <FaInstagram size="2em" style={{ margin: '5px' }}/>{}
                    </a>
                    <a href={person.node.github} target="_blank">
                      <FaGithub size="2em" style={{ margin: '5px' }}/>{}
                    </a>
                  </Fade>
              ))}
            </div>
            <p>
                I'm a Freelance Web Design/Developer based in New York City. I'm also a  <Link to={"/"} activeClassName="active" >freelance Lighting Designer</Link>, Programmer, and Electrician working in the Theater industry. I specialize in creating
                websites for individuals and organizations in the arts.
            </p>
            <p>
                I also build tools to aid in my work as a lighting designer and programmer, which you can check out below.
            </p>
            <p>
                You can contact me at liampcorley@gmail.com for any inquiries. I am currently open to commissions for custom website design and development.
            </p>

            <footer>
              <Link to="#projects" className="button style2 scrolly">Check out my projects</Link>
            </footer>
          </section>
        </Fade>
      )}
      />
    )
  }