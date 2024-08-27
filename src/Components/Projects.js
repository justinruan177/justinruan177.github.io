
import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
  const desc = {
    meetup:'Meetup is an online platform that connects individuals through shared interests and activities, offering a diverse array of groups and events for users to discover locally and globally. Users can explore and join groups ranging from professional networking to hobbies like hiking and photography. Organizers can easily create and manage events, fostering community engagement through face-to-face meetings and discussions. With a user-friendly interface and international reach, Meetup facilitates meaningful connections and enriches social experiences both locally and when traveling.',
    br:'Bleacher Report is a top digital destination for sports fans, offering comprehensive coverage and real-time updates on scores, news, and events. It provides in-depth analysis through expert articles and opinion pieces, enhancing fan insights. The platform features multimedia content like videos, highlights, and podcasts, boosting engagement. It also fosters community interaction, allowing fans to comment, share, and connect, creating a vibrant sports community.',
    flow:'Flow Asia is a Beijing-based creative digital agency specializing in digital localization for China, web design, development, and maintenance. They also offer services in search engine optimization (SEO), search engine marketing (SEM), mobile app development, WeChat services including mini programs, branding, and Chinese copywriting. Flow Asia supports global organizations seeking to establish and enhance their digital presence in the Chinese market, providing tailored solutions across various digital platforms and services.',
  }
  return (
    <div>
      <h1 className='projectHeading'>My <b>Work Experiences</b></h1>
      <div className='project'>
        <ProjectBox projectName="Meetup" title='Full stack developer' duration='September 2023 – May 2024' desc={desc.meetup} />
        <ProjectBox projectName="Bleacher Report" title='Front end developer' duration='September 2021 – May 2023' desc={desc.br} />
        <ProjectBox projectName="Flow Asia" title='Web developer' duration='September 2019 – May 2021' desc={desc.flow} />
      </div>
      
    </div>
  )
}

export default Projects