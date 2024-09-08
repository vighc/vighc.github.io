// components/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 'project1',
      link: 'https://github.com/vighc/kafka-stream',
      imgSrc: 'Files/Stock-Market.png',
      imgAlt: 'Stock-Market Image',
      description: 'Streaming Data Pipeline: A project focused on real-time data processing using Kafka and Databricks.',
    },
    {
      id: 'project2',
      link: 'https://github.com/vighc/gcp-dataflow-pipline',
      imgSrc: 'Files/Dataflow.png',
      imgAlt: 'Dataflow Pipeline Image',
      description: 'Dataflow Data Pipeline: Capture, process, and visualize COVID-19 data in both real-time and batch modes, offering insights into the evolving pandemic landscape.',
    },
    {
      id: 'project3',
      link: 'https://github.com/vighc/aws-glueToAthena',
      imgSrc: 'Files/GlueAthena.png',
      imgAlt: 'GlueAthena Image',
      description: 'Streaming Data Pipeline with AWS Glue: The pipeline efficiently captures, processes, and visualizes streaming data for robust business analytics.',
    },
  ];

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="carousel">
        <button className="left-btn" onClick={prevProject}>❮</button>
        <div className="carousel-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project ${index === currentProject ? 'active' : ''}`}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.imgSrc} alt={project.imgAlt} />
              </a>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button className="right-btn" onClick={nextProject}>❯</button>
      </div>
    </section>
  );
};

export default Projects;
