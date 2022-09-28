import React from 'react';
import '../../Styles/SelectedProject.css';
import ColorPalette from './ColorPalette';

function DisplaySelectedProject(props) {
  return (
    <div id='selected-project-container'>
      <div>
        <h1>{props.name}</h1>
        <h3>Useful links:</h3>
        <div id='useful-links-div'>
          <a href={props.website} target='_blank'>
            View Live
          </a>
          <a href={props.stockPhoto} target='_blank'>
            Free Stock Images
          </a>
          <a href={props.icons} target='_blank'>
            Free Icons
          </a>
        </div>
        <div className='color-palette-container'>
          <h3>Color Palette:</h3>
          <ColorPalette colorPalette={props.colorPalette} />
        </div>
      </div>

      <div className='full-image-div'>
        <img src={props.fullImage} alt={props.altText} className='full-image' />
      </div>
    </div>
  );
}

export default DisplaySelectedProject;
