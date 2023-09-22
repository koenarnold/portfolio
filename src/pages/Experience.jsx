import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Experience.css'
import { ExperienceList } from '../helpers/ExperienceList.jsx'

function Experience() {
  const { id } = useParams()
  const experience = ExperienceList[id]
  return (
    <div className='container--experience'>

      <h1>Experience</h1>
      <h2>Koen Arnold</h2>
      <h3>Software Developer</h3>

      <div className='container--employment'>
        <h4 className='title'>Employment</h4>
        <h4 className='employment'>Advanced Software Engineering Bootcamp | Hack Reactor | 2023</h4>
        <ul>
          <li>Completed over 1000 hours of coding over the course of 15 weeks.</li>
          <li> ADD MORE TO THIS </li>
        </ul>
        <h4 className='employment'>Estimator | J&J Waterproofing | 2022-Present</h4>
        <ul>
          <li>Managed accounts for over 50 clients, generating nearly $100,000 in revenue through bids.</li>
          <li>Communicated and coordinated with clients to manage and update incoming bids.</li>
        </ul>
        <h4 className='employment'>Dog Groomer's Assistant | Posh Paws | 2020 - 2021</h4>
        <ul>
          <li>Lead and trained three other assistants in dog prepping, washing, and inventory management.</li>
          <li>Balanced multiple tasks while maintaining quality of service and a 95% on-time completion rate.</li>
          <li>Managed stressful situations with composure and professionalism.</li>
        </ul>
      </div>




    </div>
  )
}

export default Experience