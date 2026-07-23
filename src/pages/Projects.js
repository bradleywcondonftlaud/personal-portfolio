import React, { useEffect, useMemo, useState } from 'react';
import './Projects.css';

const FEATURED_PROJECTS = [
  {
    title: 'Automate This!',
    image: '/images/automate-this.png',
    alt: 'Bradley Condon participating in an Automate This interview with Jennifer Lee',
  },
  {
    title: 'The Dreamin’ Roomie Connect',
    image: '/images/dreamin-roomie-connect.png',
    alt: 'The Dreamin’ Roomie Connect application login screen',
  },
];

const KANBAN_COLUMNS = [
  {
    key: 'planned',
    title: 'Planned',
  },
  {
    key: 'in-progress',
    title: 'In Progress',
  },
  {
    key: 'completed',
    title: 'Completed',
  },
];

const STATUS_TO_COLUMN = {
  New: 'planned',
  Backlog: 'planned',
  'Selected for Development': 'planned',

  'In Progress': 'in-progress',
  Testing: 'in-progress',
  'Ready for Deployment': 'in-progress',

  'In Production': 'completed',
  Closed: 'completed',
};

function Projects() {
  const [salesforceProjects, setSalesforceProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadSalesforceProjects() {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const response = await fetch('/api/projects', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Project request failed with status ${response.status}`
          );
        }

        const data = await response.json();

        setSalesforceProjects(
          Array.isArray(data.projects) ? data.projects : []
        );
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }

        console.error('Unable to load Salesforce projects:', error);

        setErrorMessage(
          'The project board is temporarily unavailable. Please try again later.'
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadSalesforceProjects();

    return () => {
      controller.abort();
    };
  }, []);

  const groupedProjects = useMemo(() => {
    const groups = Object.fromEntries(
      KANBAN_COLUMNS.map((column) => [column.key, []])
    );

    salesforceProjects.forEach((project) => {
      const columnKey = STATUS_TO_COLUMN[project.status];

      if (columnKey) {
        groups[columnKey].push(project);
      }
    });

    return groups;
  }, [salesforceProjects]);

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
          {FEATURED_PROJECTS.map((project) => (
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

        <section
          className="project-board-section"
          aria-labelledby="project-board-heading"
        >
          <header className="project-board-header">
            <h2 id="project-board-heading">Project Board</h2>
            <p>
              Follow my Salesforce projects from planning through production.
            </p>
          </header>

          {isLoading && (
            <div className="projects-message" role="status">
              Loading project board…
            </div>
          )}

          {!isLoading && errorMessage && (
            <div
              className="projects-message projects-error"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          {!isLoading &&
            !errorMessage &&
            salesforceProjects.length === 0 && (
              <div className="projects-message">
                No public Salesforce projects are currently available.
              </div>
            )}

          {!isLoading &&
            !errorMessage &&
            salesforceProjects.length > 0 && (
              <div
                className="project-kanban"
                aria-label="Salesforce project Kanban board"
              >
                {KANBAN_COLUMNS.map((column) => {
                  const columnProjects = groupedProjects[column.key];

                  return (
                    <section
                      className={`kanban-column kanban-column-${column.key}`}
                      key={column.key}
                      aria-labelledby={`kanban-${column.key}`}
                    >
                      <header className="kanban-column-header">
                        <h3 id={`kanban-${column.key}`}>
                          {column.title}
                        </h3>

                        <span
                          className="kanban-column-count"
                          aria-label={`${columnProjects.length} projects`}
                        >
                          {columnProjects.length}
                        </span>
                      </header>

                      <div className="kanban-cards">
                        {columnProjects.length === 0 ? (
                          <p className="kanban-empty">
                            No projects in this stage.
                          </p>
                        ) : (
                          columnProjects.map((project) => (
                            <article
                              className="kanban-card"
                              key={project.id}
                            >
                              {project.imageUrl && (
                                <div className="kanban-card-image-frame">
                                  <img
                                    className="kanban-card-image"
                                    src={project.imageUrl}
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              )}

                              <div className="kanban-card-content">
                                <div className="kanban-card-meta">
                                  {project.number && (
                                    <span className="kanban-card-number">
                                      {project.number}
                                    </span>
                                  )}

                                  {project.priority && (
                                    <span className="kanban-card-priority">
                                      {project.priority}
                                    </span>
                                  )}
                                </div>

                                <h4>{project.title}</h4>

                                {project.summary && (
                                  <p className="kanban-card-summary">
                                    {project.summary}
                                  </p>
                                )}

                                <footer className="kanban-card-footer">
                                  <span className="kanban-card-status">
                                    {project.status}
                                  </span>

                                  {project.url && (
                                    <a
                                      className="kanban-card-link"
                                      href={project.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={`View project: ${project.title}`}
                                    >
                                      View project
                                    </a>
                                  )}
                                </footer>
                              </div>
                            </article>
                          ))
                        )}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
        </section>
      </div>
    </main>
  );
}

export default Projects;