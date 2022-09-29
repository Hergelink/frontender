import React, { useEffect } from 'react'
import Projects from './Projects'
import ProjectsPageHeader from './ProjectsPageHeader'
import '../../Styles/Projects.css'
import DifficultyButtons from './DifficultyButtons';

function ProjectsPage() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div id='main-container-div'>
      <ProjectsPageHeader />
      <DifficultyButtons />
      <Projects />
    </div>
  )
}

export default ProjectsPage
