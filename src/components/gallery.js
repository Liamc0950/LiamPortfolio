import React from 'react';
import PropTypes from "prop-types"

//takes an array of Contentful Shows and generates a 2d array sorting them into rows
function generateRows(shows){
  const galleryRows = [];
  const colLimit = 3;
  
  //instantiate the first row as an array
  galleryRows[0] = [];
  
  for(let i = 0, j = 0, k=0; i<shows.length; i++){
    //if the current galleryRow is not full
    if(j < colLimit){
      //add show[i] to the given galleryRow array
      galleryRows[k].push(shows[i])
      //and increment the column count for that row
      j++;
    }
    else{
      k++;
      j=1;
      //create an array for the new galleryRow
      galleryRows[k] = [];
      //then show[i] to the new galleryRow
      galleryRows[k].push(shows[i])
    }
  }

  return galleryRows;

}

const Gallery = ({ shows }) => {
  
    return (
      // {generateRows(shows).map(row => (
      //   <Row className="g-0">
      //     {row.map(show=>(
      //       <Col>
      //         <GatsbyImage image={show.node.coverImage.gatsbyImageData} alt={'alt text'}/>
      //       </Col>              
      //     ))}
      //   </Row>
      // ))})
  }
  
  Gallery.propTypes = {
    shows: PropTypes.node.isRequired,
  }
  
  export default Gallery
 