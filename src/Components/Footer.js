import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Justin Ruan</h4>
      <h4>Copyright &copy; 2024 JR</h4>
      <div className='footerLinks'>
        <a href="https://www.linkedin.com/in/justin-ruan-615058290" target='_blank'><FaLinkedin/></a>
        <a href='justinruan177@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer