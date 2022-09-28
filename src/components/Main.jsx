import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../src/components/Styles/Main.css';
import Contact from './Main-Components/Contact';
import ErrorPage from './Main-Components/ErrorPage';
import FAQ from './Main-Components/FAQ';
import HomePage from './Main-Components/Home/HomePage';
import ProjectsPage from './Main-Components/Projects/ProjectsPage';
import SelectedProject from './Main-Components/Projects/SelectedProject';


function Main() {



  return (
    <main>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        
        <Route path='/projects/:id' element={<SelectedProject />} />
        
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default Main;
