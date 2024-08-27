import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaAws, FaJava } from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiCss3, SiRedux, SiTypescript, SiGraphql,  SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Redux: <SiRedux />,
        Typescript: <SiTypescript />,
        Graphql: <SiGraphql />,
        AWS: <FaAws />,
        CSS3: <SiCss3 />,
        'Next.js': <SiNextdotjs />,
        Python: <FaPython />,
        Java: <FaJava />,
        TailwindCSS: <SiTailwindcss />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      <div>{icon[skill]}</div>
      <p className='skillName'>{skill}</p>
    </div>
  )
}

export default Skills
