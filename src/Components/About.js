import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Justin Ruan</b> and I am located in <b>Los Angeles, CA</b>.
            I'm a <b>full stack web developer</b> with <b>5+ years </b>of experience. <br/><br/>

            For my most recent project, I worked as a <b>full stack developer</b> for <b>Meetup</b>, a social networking web application that 
            allow users to join groups and arrange events. My major role was on the front-end but I also worked on various backend logic myself.
            <br/><br/>

            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Javascript' />
        <Skills skill='Express' />
        <Skills skill='Redux'/>
        <Skills skill='Graphql'/>
        <Skills skill='Typescript' />
        <Skills skill='Next.js'/>
        <Skills skill='Postman' />
        <Skills skill='AWS' />
        <Skills skill='CSS3'/>
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Java'/>
        <Skills skill='TailwindCSS'/>
        <Skills skill='MongoDb' />
        <Skills skill='Python'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        
      </div>
    </>
  )
}

export default About