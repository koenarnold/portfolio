import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Koen Arnold</h2>
        <div className='prompt'>
          <p>Software Developer</p>
          <a href='https://www.linkedin.com/in/arnoldkoen/' target='_blank'><LinkedInIcon /></a>
          <a href='https://github.com/koenarnold/' target='_blank'><GitHubIcon /></a>
          <a href='mailto:kostarnold@gmail.com'><EmailIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span>ReactJS, JavaScript, HTML, CSS, MaterialUI, DaisyUI, Tailwind</span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
            <span>NodeJS, Express, PostgreSQL, MongoDB, MySQL, Redis, Socket.io</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home