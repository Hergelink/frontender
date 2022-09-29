import React from 'react';

function ProjectsPageHeader() {
  return (
    <div id='projects-header-container'>
      <h1>Projects Library</h1>
      <div id='get-started-div'>
        <h3>How to get started:</h3>
        <div className='get-started-info'>
          <span className='emoji'>🚧</span>
          <p>Choose one of our projects below.</p>
        </div>
        <div className='get-started-info'>
          <span className='emoji'>🛠️</span>
          <p>Recreate all or parts of the page.</p>
        </div>
        <div className='get-started-info'>
          <span className='emoji'>⭐</span>
          <p>Improve and test your skills.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPageHeader;
