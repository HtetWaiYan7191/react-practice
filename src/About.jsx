import React from 'react'

const About = (props) => {
  return (
    <div>
        {props.mySkills.map((mySkill) => <p>{mySkill}</p>)}
    </div>
  )
}

export default About
