import React from 'react'
import About from './About'

const Home = (props) => {
    const mySkills = ['html','css','javascript'];
  return (
    <h1>
     This is {props.userName}
      <About mySkills = {mySkills}></About>
    </h1>
  )
}

export default Home
