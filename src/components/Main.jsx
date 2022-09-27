import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../src/components/Styles/Main.css';
import Contact from './Main-Components/Contact';
import ErrorPage from './Main-Components/ErrorPage';
import FAQ from './Main-Components/FAQ';
import HomePage from './Main-Components/Home/HomePage';
import ProjectsPage from './Main-Components/Projects/ProjectsPage';


function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default Main;
