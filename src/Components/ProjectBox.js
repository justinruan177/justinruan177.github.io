import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectName,title,duration,desc}) => {   
  return (
    <div className='projectBox'> 
        <div>
            <h3 className='project-title'><b>{title}</b></h3>
            <h5 className='project-info'><span>{projectName}</span><span>{duration}</span></h5>
            <p className='project-desc'>{desc}</p>

            {/* <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox