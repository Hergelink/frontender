import React from 'react';
import { useParams } from 'react-router-dom';
import DisplaySelectedProject from './DisplaySelectedProject';

import projectTemplate from './projectTemplate';

function SelectedProject(props) {
  const { id } = useParams();

  const findProject = projectTemplate.find((proj) => proj.id == id);


  return (
    <DisplaySelectedProject
      name={findProject.projectName}
      image={findProject.referenceImage}
      altText={findProject.imageAltText}
      dificulty={findProject.dificulty}
      website={findProject.originalWebsite}
      stockPhoto={findProject.stockPhotoWebsite}
      icons={findProject.freeIconsWebsite}
      colorPalette={findProject.colorPalette}
      id={findProject.id}
      fullImage={findProject.fullImg}
    />
  );
}

export default SelectedProject;
