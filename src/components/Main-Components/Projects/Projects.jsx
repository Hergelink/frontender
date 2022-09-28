import React from 'react';
import Project from './Project';
import projectTemplate from './projectTemplate';


function Projects() {

  return (
    <div className='projects-container'>
      {projectTemplate.map((project, key) => {
        return (
          <Project
            name={project.projectName}
            image={project.referenceImage}
            altText={project.imageAltText}
            dificulty={project.dificulty}
            website={project.originalWebsite}
            stockPhoto={project.stockPhotoWebsite}
            icons={project.freeIconsWebsite}
            colorPalette={project.colorPalette}
            key={key}
            id={project.id}
          />
        );
      })}
    </div>
  );
}

export default Projects;
