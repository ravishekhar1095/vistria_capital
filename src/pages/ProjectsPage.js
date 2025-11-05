import { projects } from '../data/projects';

const ProjectsPage = () => {
  const focusHighlights = [
    'Absorption velocity tracked through quarterly Delhi NCR market updates.',
    'IGBC / GRIHA aligned apartments to future-proof sustainability goals.',
    'Ticket sizes curated for ₹3 Cr \u2013 ₹12 Cr mandates with concierge execution.',
  ];

  return (
    <>
      <section className="page-hero">
        <p className="page-kicker">Featured Portfolio</p>
        <h1>Gurugram&rsquo;s marquee residences under Vistria Capital</h1>
        <p className="page-subtitle">
          Explore curated assets across Dwarka Expressway, Golf Course Road, and emerging micro-markets. Every
          listing is diligence-ready using the due diligence discipline applied by institutional global
          markets teams.
        </p>
        <div className="page-pills">
          {focusHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="projects-highlight">
        <div className="projects-highlight__frame">
          <iframe
            src="https://www.youtube.com/embed/_sq0jrNSvj8?start=20"
            title="Projects highlight"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="projects-highlight__caption">
          A quick tour through marquee Gurugram residences we currently steward under the Vistria Capital portfolio.
        </p>
      </section>

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              {project.image && (
                <div className="project-media">
                  <img src={project.image} alt={`${project.name} exterior`} loading="lazy" />
                </div>
              )}
              <header>
                <h3>{project.name}</h3>
                <p className="location">{project.location}</p>
              </header>
              <dl>
                <div>
                  <dt>Configuration</dt>
                  <dd>{project.configuration}</dd>
                </div>
                <div>
                  <dt>Size</dt>
                  <dd>{project.size}</dd>
                </div>
                <div>
                  <dt>Investment</dt>
                  <dd>{project.price}</dd>
                </div>
              </dl>
              <a href={project.link} className="learn-more" target="_blank" rel="noreferrer">
                View brochure ↗
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
