// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Python program to make a chatbot',
    link: 'https://github.com/dafallen-Ankit/Projects/blob/main/Python%20program%20to%20make%20chatbot.docx',
  },
  {
    title: 'Project 2',
    description: 'OverView of My-Self',
    link: 'https://www.linkedin.com/in/ankit-kumar-singh-624465255/',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;