import React from 'react'
import '../styles/resume.css'
import selfie from '../images/selehvie.jpg'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";


export default function Resume() {
  return (
      <div className='split-screen'>
          <div className='left-split'>
            <div className='text-container'>
              <h1>About me</h1>
              <p>Hey there! I'm Topias, nearing the end of my studies in ICT Engineering, following my prior graduation as an ICT technician. 
                I've always been fascinated by technology's constant evolution and endless possibilities, which drive my passion for learning and growing. 
                Currently, my mind is set on learning and mastering React and React Native because I've found that frontend development aligns more with my interests and strengths.</p>
              <div className='experience-container'>
                <h2>Education</h2>
                <h4>Oulu University of Applied Sciences</h4>
                <p>2021 -, Engineer, Information and Communication Techcology</p>
                
                <h4>Educational Consortium OSAO</h4>
                <p>2016 - 2019, Technician, Information and Communication Techcology</p>

                <h2>Work Experience</h2>
                <h4>ANDRITZ Savonlinna Works Oy</h4>
                <p>Summers 2020-2022, Mechanic: Pipe and device installations on mass washers.</p>

                <h4>Paras Biopharmaceuticals Finland Oy</h4>
                <p>2019, IT Technician & Supervision: Performing IT related tasks within the company & responsible for looking after the company's IT network. 
                  Other time spent researching IT qualification needs for GMP related IT systems.</p>
              
                <h4>Power Finland Oy</h4>
                <p>2019, Device installations: TV's, PC's, mobile devices.</p>
              </div>
            </div>
            <div class="button">
              <Link to='/projects'>
                <FaArrowDown className='arrow-icon'/>
              </Link>
              <span>Projects & Skills</span>
            </div>
          </div>
          <div className='right-split'>
              <img src={selfie} alt='selfie' className='selfie'/>
              <div className='person-container'>
                <h3>Topias Junno</h3>
                <div className='links'>
                  <a href='https://github.com/JunnoTo' target='_blank' rel="noreferrer"><FaGithub className='icon'/></a>
                  <a href='https://www.linkedin.com/in/topias-junno-295147261/' target='_blank' rel="noreferrer"><FaLinkedin className='icon'/></a>
                </div>
                <p>topiasjunno@gmail.com / +358 413189580</p>
                <p>23 years old</p>
                <p>Student at Oulu University of Applied Sciences</p>
                <p>Hobbies: Gym, Walking, Videogames</p>
              </div>
          </div>
      </div>
  )
}
