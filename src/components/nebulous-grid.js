import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './nebulous-grid.css'
import { Row } from 'react-bootstrap'

const NebulousGrid = ({ posters }) => {
  return (
    <div className="nebulous-grid">
        <h2>Selected Programming Credits</h2>
        {posters.map((poster, index) => {
          const image = getImage(poster.node.image)
          return (
            <div key={index} className="grid-item">
                <div className="image-container">
                  <GatsbyImage 
                    image={image} 
                    alt={poster.title || `Poster ${index + 1}`}
                  />
                  <div className="overlay">
                    <h3>{poster.node.title}</h3>
                    <h4>{poster.node.venue}</h4>
                    <h4>LD: {poster.node.ld}</h4>
                  </div>
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default NebulousGrid