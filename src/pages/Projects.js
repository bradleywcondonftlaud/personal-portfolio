import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Automate This!',
      image: '/images/automate-this.png',
      alt: 'Bradley Condon participating in an Automate This interview with Jennifer Lee',
    },
    {
      title: "The Dreamin’ Roomie Connect",
      image: '/images/dreamin-roomie-connect.png',
      alt: "The Dreamin’ Roomie Connect application login screen",
    },
  ];

  return (
    <main className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1>Projects</h1>
        </header>

        <section
          className="projects-grid"
          aria-label="Featured projects"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-showcase-card"
            >
              <div className="project-image-frame">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                />
              </div>

              <div className="project-title-pill">
                <h2>{project.title}</h2>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Projects;