import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';

const advisoryPillars = [
  {
    title: 'Capital Markets Advisory',
    detail:
      'Portfolio optimisation, asset dispositions, and bespoke investments modeled on JLL’s institutional playbooks.',
    cta: { label: 'Explore projects', to: '/projects' },
  },
  {
    title: 'Occupier & Lifestyle Solutions',
    detail:
      'End-to-end buyer representation, relocation concierge, and experience design inspired by JLL&rsquo;s integrated services.',
    cta: { label: 'View services', to: '/services' },
  },
  {
    title: 'Research & Valuations',
    detail:
      'Forward-looking market analytics, sustainability benchmarking, and valuation support aligned to global family office standards.',
    cta: { label: 'Read insights', to: '/insights' },
  },
];

const differentiators = [
  {
    label: 'Data-first advisory',
    copy: 'Local absorption, pricing velocity, and policy signals distilled from JLL and partner research hubs.',
  },
  {
    label: 'Sustainability focus',
    copy: 'Each mandate evaluates ESG compliance, decarbonisation pathways, and wellness features for lasting value.',
  },
  {
    label: 'On-ground execution',
    copy: 'Developer negotiations, legal diligence, and possession oversight orchestrated by a dedicated deal desk.',
  },
];

const LandingPage = () => {
  const quickStats = [
    {
      figure: '₹8.7 Cr+',
      caption: 'Ultra luxury inventory under mandate',
    },
    {
      figure: '73%',
      caption: 'Client mandates sourced via institutional referrals',
    },
    {
      figure: '4 micro-markets',
      caption: 'Priority focus across Dwarka Expressway & Golf Course belts',
    },
  ];

  return (
    <>
      <section className="hero refined-hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Inspired by JLL&rsquo;s global advisory model</div>
          <h1>
            Modern luxury real estate advisory crafted for Delhi NCR&rsquo;s most discerning investors
          </h1>
          <p className="hero-subtitle">
            Vistria Capital combines institutional-grade research, capital markets intelligence, and concierge
            execution to deliver landmark residences across Gurugram&rsquo;s most resilient neighbourhoods.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn primary">
              View portfolio
            </Link>
            <Link to="/contact" className="btn outline">
              Schedule a strategy call
            </Link>
          </div>
          <div className="hero-tags">
            <span>Capital Markets</span>
            <span>Occupier Solutions</span>
            <span>Research &amp; Insights</span>
          </div>
        </div>
        <div className="hero-insights">
          {quickStats.map((item) => (
            <div key={item.caption}>
              <span className="figure">{item.figure}</span>
              <span className="caption">{item.caption}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-promise">
        <div className="brand-promise__lead">
          <h2>See a brighter way with Vistria Capital</h2>
          <p>
            Taking cues from JLL&rsquo;s integrated practice, we orchestrate advisory mandates that connect
            capital, opportunities, and sustainability outcomes for long-term wealth stewardship.
          </p>
        </div>
        <div className="brand-promise__grid">
          {differentiators.map((item) => (
            <div key={item.label} className="brand-card">
              <h3>{item.label}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pillars">
        <div className="section-header">
          <h2>Integrated advisory pillars</h2>
          <p>
            Built to mirror the breadth of JLL&rsquo;s service portfolio while staying bespoke to private
            clients active in Delhi NCR.
          </p>
        </div>
        <div className="pillars-grid">
          {advisoryPillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
              <Link to={pillar.cta.to} className="text-link">
                {pillar.cta.label} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="intro light-surface">
        <div className="intro-card">
          <h2>Invest with conviction</h2>
          <p>
            Each opportunity is screened through regulatory, financial, and ESG lenses, while our transaction
            managers coordinate due diligence, financing, and post-possession enhancements.
          </p>
          <div className="intro-cta">
            <Link to="/services" className="btn primary">
              Discover the mandate journey
            </Link>
          </div>
        </div>
        <div className="intro-highlights">
          <div className="highlight">
            <h3>Neighbourhood curation</h3>
            <p>Focus on growth corridors with proven absorption &mdash; Dwarka Expressway, Golf Course Road, and SPR.</p>
          </div>
          <div className="highlight">
            <h3>Transaction governance</h3>
            <p>Deal rooms, documentation grids, and milestone reporting patterned on JLL&rsquo;s enterprise standards.</p>
          </div>
          <div className="highlight">
            <h3>Experience delivery</h3>
            <p>Handovers enhanced with design partners, sustainability retrofits, and smart home integrations.</p>
          </div>
        </div>
      </section>

      <section className="vastu-experience">
        <div className="vastu-media">
          <iframe
            src="https://www.youtube.com/embed/HIsM8-6kMGE"
            title="Vastu aligned luxury living"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="vastu-copy">
          <h2>Vastu-aligned living for elevated wellbeing</h2>
          <p>
            Drawing on insights from Vastu consultants collaborating with JLL&rsquo;s design advisory teams, Vistria
            Capital curates residences that harmonise energy flow with luxury aesthetics. From orienting master
            suites to integrating meditation decks, we ensure your next address nurtures balance, prosperity, and calm.
          </p>
          <ul>
            <li>North-east wellness cores with diffused daylight and biophilic materials.</li>
            <li>Kitchen and service zoning positioned along south-east quadrants for elemental alignment.</li>
            <li>Customisable pooja and meditation suites enhanced with acoustic and lighting design.</li>
            <li>On-demand Vastu audits during layout customization and fit-out stages.</li>
          </ul>
          <Link to="/contact" className="text-link">
            Request a Vastu consultation →
          </Link>
        </div>
      </section>

      <section className="news-section">
        <div className="section-header">
          <h2>Live market intel &mdash; Delhi NCR</h2>
          <p>Curated updates from primary releases across JLL, Knight Frank, ANAROCK, and policy briefings.</p>
        </div>
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.title} className="news-card">
              <header>
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
              </header>
              <p>{item.summary}</p>
              <a href={item.link} className="news-source" target="_blank" rel="noreferrer">
                {item.source} ↗
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
