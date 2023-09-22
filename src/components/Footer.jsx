import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href='https://www.linkedin.com/in/arnoldkoen/' target='_blank'><LinkedInIcon /></a>
          <a href='https://github.com/koenarnold/' target='_blank'><GitHubIcon /></a>
          <a href='mailto:kostarnold@gmail.com'><EmailIcon /></a>
        </div>
        <p> &copy; 2023 koenarnold</p>
    </div>
  )
}

export default Footer