import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const focusHighlights = [
    'Absorption velocity tracked through quarterly Delhi NCR market updates.',
    'IGBC / GRIHA aligned apartments to future-proof sustainability goals.',
    'Ticket sizes curated for ₹3 Cr – ₹12 Cr mandates with concierge execution.',
  ];

  const microMarketFilters = ['Golf Course Road', 'Golf Course Ext.', 'Dwarka Expressway', 'SPR', 'Noida', 'Second homes'];

  const trophyProjects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);
  const carouselImages = [
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1400&q=80',
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const fallbackImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80';

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = fallbackImage;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <>
      <section className="projects-hero dark-panel">
        <div className="projects-hero__copy">
          <p className="page-kicker">Featured portfolio</p>
          <h1>Gurugram&rsquo;s marquee residences under Vistria Capital</h1>
          <p className="page-subtitle">
            Explore curated assets across Dwarka Expressway, Golf Course Road, and emerging micro-markets. Every listing is diligence-ready
            using institutional capital markets discipline.
          </p>
          <div className="page-pills">
            {focusHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="projects-filters">
            {microMarketFilters.map((filter) => (
              <button key={filter}>{filter}</button>
            ))}
          </div>
        </div>
        <div className="projects-hero__media">
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
        </div>
      </section>

      <section className="project-carousel">
        <div className="carousel-frame">
          <img
            src={carouselImages[carouselIndex]}
            alt="Luxury residence"
            key={carouselImages[carouselIndex]}
            loading="lazy"
            onError={handleImageError}
          />
        </div>
        <div className="carousel-indicators">
          {carouselImages.map((_, idx) => (
            <span key={idx} className={idx === carouselIndex ? 'active' : ''} />
          ))}
        </div>
      </section>

      <section className="projects-showcase page-section">
        <div className="trophy-grid">
          {trophyProjects.map((project) => (
            <article key={project.name} className="trophy-card">
              {project.image && (
                <div className="trophy-media">
                  <img src={project.image} alt={`${project.name} exterior`} loading="lazy" onError={handleImageError} />
                </div>
              )}
              <div className="trophy-content">
                <p className="micro-market">{project.location}</p>
                <h2>{project.name}</h2>
                <p>{project.configuration}</p>
                <div className="trophy-stats">
                  <div>
                    <span>Size</span>
                    <strong>{project.size}</strong>
                  </div>
                  <div>
                    <span>Investment</span>
                    <strong>{project.price}</strong>
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View brochure ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-grid">
          {remainingProjects.map((project) => (
            <article key={project.name} className="project-card">
              {project.image && (
                <div className="project-media">
                  <img src={project.image} alt={`${project.name} exterior`} loading="lazy" onError={handleImageError} />
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
