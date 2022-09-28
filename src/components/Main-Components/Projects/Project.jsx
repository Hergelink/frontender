import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
  return (
    <Link to={`/projects/${props.id}`}>
      <div
        className='project-div'
        style={{
          backgroundColor:
            props.dificulty === 'Beginner'
              ? 'green'
              : props.dificulty === 'Intermediate'
              ? 'orange'
              : 'red',
        }}
      >
        <img
          src={props.image}
          alt={props.altText}
          className='project-images'
        ></img>
        <h1>{props.name}</h1>
      </div>
    </Link>
  );
}

export default Project;
