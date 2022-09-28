import React from 'react';

function ColorPalette(props) {
  return (
    <div className='color-palette-div'>
      {props.colorPalette.map((color, key) => {
        return (
          <div className='color-palette-flex'>
            <span
              style={{
                backgroundColor: color,
                width: '20px',
                height: '20px',
                display: 'inline-block',
                borderRadius: '50px',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '5px',
              }}
            ></span>
            <p>{color}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ColorPalette;
