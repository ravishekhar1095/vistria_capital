import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const highlightStats = [
    { value: '18 live', label: 'UHNI mandates', detail: 'Curated each quarter' },
    { value: '₹2,450 Cr+', label: 'Capital placed', detail: 'Since 2021' },
    { value: '5 pods', label: 'Concierge teams', detail: 'Advisory · design · diligence' },
  ];

  const microMarketFilters = ['Golf Course Road', 'Golf Course Ext.', 'Dwarka Expressway', 'SPR', 'Noida', 'Second homes'];
  const serviceNotes = ['Deal rooms with valuation partners', 'Vastu + design customization support', 'Priority lending alliances with 5+ banks'];
  const followUpCards = [
    {
      title: 'Developer collaboration desk',
      summary: 'Structure premium launch alliances with boutique developers needing positioning, pricing, and activation intelligence.',
      link: { label: 'See collaboration flow', to: '/services' },
    },
    {
      title: 'Private capital concierge',
      summary: 'Discreet briefings for UHNI and family office mandates with curated site-visits and after-sales governance.',
      link: { label: 'Book a consultation', to: '/contact' },
    },
  ];
  const fallbackImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80';
  const heroImage = projects[0]?.image ?? fallbackImage;

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = fallbackImage;
  };

  return (
    <>
      <section className="projects-hero projects-hero--simple">
        <div className="projects-hero__copy">
          <p className="page-kicker">Concierge portfolio</p>
          <h1>Streamlined luxury mandates ready for quick diligence</h1>
          <p className="page-subtitle">
            Browse our most active mandates across Dwarka Expressway, Golf Course corridors, and select second-home destinations. Every
            project listed here is vetted for legal clarity, ESG alignment, and design readiness.
          </p>
          <div className="projects-highlights">
            {highlightStats.map((item) => (
              <div key={item.label} className="projects-highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="projects-chip-row">
            {microMarketFilters.map((filter) => (
              <span key={filter}>{filter}</span>
            ))}
          </div>
        </div>
        <div className="projects-hero__visual">
          <img src={heroImage} alt="Featured luxury residence" loading="lazy" onError={handleImageError} />
          <div className="projects-hero__note">
            <span>Hands-on concierge</span>
            <p>Guided discovery, negotiations, and after-sales oversight.</p>
          </div>
        </div>
      </section>

      <section className="projects-gallery page-section">
        <div className="section-header">
          <h2>Available across NCR&rsquo;s most resilient corridors</h2>
          <p>Trimmed to a simple grid so you can scan configuration, size, and ticket value instantly.</p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.name} className="project-card project-card--simple">
              {project.image && (
                <div className="project-media">
                  <img src={project.image} alt={`${project.name} exterior`} loading="lazy" onError={handleImageError} />
                </div>
              )}
              <div className="project-body">
                <p className="micro-market">{project.location}</p>
                <h3>{project.name}</h3>
                <p>{project.configuration}</p>
                <div className="project-meta">
                  <div>
                    <span>Size</span>
                    <strong>{project.size}</strong>
                  </div>
                  <div>
                    <span>Investment</span>
                    <strong>{project.price}</strong>
                  </div>
                </div>
                <a href={project.link} className="text-link" target="_blank" rel="noreferrer">
                  View brochure ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-cta-panel page-section">
        <div className="project-cta-content">
          <span className="eyebrow">Need a curated shortlist?</span>
          <h2>Tell us the ticket band, we&rsquo;ll bring 3 ready-to-close options</h2>
          <p>
            Share your preferred timeline, vastu requirements, or managed rental goals and we&rsquo;ll activate the mandate desk within 48 hours.
            You can stay focussed on the decision while we coordinate data rooms and negotiations.
          </p>
          <div className="project-cta-actions">
            <Link to="/contact" className="btn primary">
              Talk to the desk
            </Link>
            <Link to="/services" className="btn outline">
              Explore services
            </Link>
          </div>
        </div>
        <div className="project-cta-list">
          {serviceNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>

      <section className="project-follow-up page-section">
        <div className="project-follow-grid">
          {followUpCards.map((card) => (
            <article key={card.title} className="project-follow-card">
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <Link to={card.link.to} className="text-link">
                {card.link.label} →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
