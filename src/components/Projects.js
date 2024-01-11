import React from 'react'
import PageAnimation from './PageAnimation'
import '../styles/projects.css'
import { FaGithub, FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {id: 1, name: 'Kvgwolt', description: 'A simulated food delivery app made as a group project', technologies: 'React, Express.js, MySQL', url: 'https://github.com/KVG21/webProjekti'},
    {id: 2, name: 'Alcometer', description: 'An app that calculates blood alcohol levels using your details', technologies: 'React Native', url: 'https://github.com/JunnoTo/Alcometer'},
    {id: 3, name: 'Converter', description: 'Convert currencies by fetching their current rates', technologies: 'React Native', url: 'https://github.com/JunnoTo/Converter'},
    {id: 4, name: 'What2Watch', description: 'Browse movies and series saved to firestore. Get recommendations based on what you liked', technologies: 'React Native, Firebase', url: 'https://github.com/KVG21/What2Watch'},
    {id: 5, name: 'FitTrack', description: 'Track workouts saved directly to device storage', technologies: 'React Native', url: 'https://github.com/JunnoTo/FitTrack'}
  ];

  return (
    <PageAnimation>
      <div className='split-screen2'>
          <div className='left-split2'>
          <div class="button">
              <Link to='/react-cv'>
                <FaArrowUp className='arrow-icon'/>
              </Link>
              <span>Back</span>
            </div>
            <h1>Projects</h1>
            <div className='grid-container'>
              {projects.map((project) => (
                <div key={project.id} className='project-card'>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <p>Technologies: {project.technologies}</p>
                  <a href={project.url} target='_blank' rel="noreferrer"><FaGithub/></a>
                </div>
              ))}
            </div>
          </div>
          <div className='right-split2'>
              <h1>Skills</h1>
              <div className='right-helper'>
              <ul>
                <h2>IT</h2>
                <li>JavaScript</li>
                <li>Kotlin</li>
                <li>C</li>
                <li>C++</li>
                <li>Linux</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>React Native</li>
                <li>SQL</li>
                <li>Express.js</li>
                <li>Firebase</li>
                <li>Unity</li>
                <li>Blender</li>
              </ul>
              <ul>
                <h2>Languages</h2>
                <li>Finnish - Native</li>
                <li>English - Fluent</li>
                <li>Swedish - Basics</li>
              </ul>
            </div>
          </div>
      </div>
    </PageAnimation>
  )
}
