import React from 'react';


function Project(props) {
  return (
    <div
      className='project-div'
      style={{
        backgroundColor:
          props.dificulty === 'Beginner'
            ? 'green'
            : props.dificulty === 'Intermediate'
            ? 'orange'
            : 'red'
      }}
    >
      <img src={props.image} alt={props.altText} className='project-images'></img>
      <h1>{props.name}</h1>
      
      
      {/* <p className='dificulty'>{props.dificulty}</p> */}
      {/* <a href={props.website} target='_blank' >Live Website</a> */}
    </div>
  );
}

export default Project;
