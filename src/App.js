import React from 'react';
import './App.css';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/react-cv" element={ <Resume /> } />
          <Route path="/projects" element={ <Projects /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
