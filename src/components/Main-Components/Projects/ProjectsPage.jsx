import React from 'react'
import Projects from './Projects'
import ProjectsPageHeader from './ProjectsPageHeader'
import '../../Styles/Projects.css'

function ProjectsPage() {
  return (
    <div id='main-container-div'>
      <ProjectsPageHeader />
      <Projects />
    </div>
  )
}

export default ProjectsPage
