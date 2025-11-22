import { useState } from 'react';

const valuePillars = [
  {
    title: 'Integrity-led heritage',
    description:
      'Evolved from Andlay Estates, we blend decades of channel partner credibility with the discipline of institutional playbooks.',
  },
  {
    title: 'Client-first orchestration',
    description:
      'Every mandate is stewarded by research, strategy, transaction governance, and experience design specialists laser-focused on NCR luxury buyers.',
  },
  {
    title: 'Sustainable progress',
    description:
      'We advance ESG goals by nudging partner developers toward greener materials, energy efficiencies, and wellness certifications.',
  },
];

const timeline = [
  {
    year: '2022',
    highlight:
      'Rebranded to Vistria Capital with a ₹350 Cr sales mandate, targeting 175 high-end units across Gurugram&rsquo;s luxury corridors.',
  },
  {
    year: '2023',
    highlight:
      'Bolstered NCR footprint with strategic alliances in Noida and Golf Course Road; doubled research depth through national analytics partners.',
  },
  {
    year: '2024',
    highlight:
      'Expanded concierge and ESG desks, launching holistic mandate management and receiving recognition for strong sales performance at TARC Ishva.',
  },
  {
    year: '2025',
    highlight:
      'Introduced a Global Investor Desk for NRIs in Singapore, Dubai, and London while deepening leisure home capabilities beyond NCR.',
  },
];

const leadership = [
  {
    name: 'Abhishiekh Andlay',
    role: 'Founder & Chairperson',
    bio: 'Founder of Andlay Estates, steering Vistria Capital’s growth vision, developer alliances, and purposeful expansion into luxury and leisure mandates.',
    image: '/1751109019571.jpeg',
  },
];

const recognitions = [
  {
    title: 'Strong Sales Performance',
    description: 'Awarded for stellar absorption at TARC Ishva, Sector 63A, reinforcing our luxury credentials.',
  },
  {
    title: 'Leisure Portfolio Expansion',
    description:
      'Strategic stake in Bhowali Valley Chalets, Nainital, catering to NCR buyers seeking curated second homes.',
  },
  {
    title: 'Sales Momentum',
    description:
      'Closed 85 high-end residences in FY21, on track for 175 homes and ₹350 Cr sales in FY22 across Gurugram premium launches.',
  },
];

const marketCoverage = [
  'Gurugram: Golf Course Road, Dwarka Expressway, Southern Peripheral Road, Sector 66-72, Sector 80.',
  'NCR Expansion: Noida and Greater Noida premium corridors with bespoke channel partnerships.',
  'Leisure Destinations: Hill-state retreats like Nainital, curating second homes for Delhi NCR investors.',
];

const audiencePlaybooks = [
  {
    key: 'investors',
    label: 'Investors',
    headline: 'Risk-governed capital deployment',
    body: 'Deal rooms, cash-flow simulations, and ESG scoring to help families and NRIs commit with conviction across NCR luxury and leisure assets.',
    proof: '73% mandates via institutional referrals; average closure in 92 days.',
  },
  {
    key: 'developers',
    label: 'Developers',
    headline: 'Structured channel partnerships',
    body: 'Absorption dashboards, positioning workshops, and concierge-led walk-throughs that convert premium launches into sustained momentum.',
    proof: 'Mandated on Golf Course Road, Dwarka Expressway, and SPR corridors.',
  },
  {
    key: 'advisors',
    label: 'Advisors & banks',
    headline: 'Co-created outcomes with partners',
    body: 'Valuation-ready dossiers, lending alliances, and clarity on title & compliance accelerate decisioning for banks and advisory teams.',
    proof: '5+ banking alliances; Vistria Capital remains independent of US-based The Vistria Group, LP.',
  },
];

const AboutPage = () => {
  const [activePlaybook, setActivePlaybook] = useState(audiencePlaybooks[0].key);
  const selectedPlaybook = audiencePlaybooks.find((item) => item.key === activePlaybook);

  return (
    <>
      <section className="page-hero">
        <p className="page-kicker">About Vistria Capital</p>
        <h1>Your partner for elevated real estate outcomes in Delhi NCR</h1>
        <p className="page-subtitle">
          We are a boutique advisory born from institutional expertise, inspired by global “See a brighter way”
          philosophies, and devoted to crafting resilient, luxury-led portfolios.
        </p>
      </section>

      <section className="about-values page-section">
        <div className="section-header">
          <h2>What defines us</h2>
          <p>Three principles that inform every mandate, engagement, and recommendation.</p>
        </div>
        <div className="value-grid">
          {valuePillars.map((item) => (
            <div key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="playbook-switcher page-section">
        <div className="section-header">
          <h2>Engagement lenses</h2>
          <p>Toggle to see how we collaborate with each audience.</p>
        </div>
        <div className="playbook-tabs">
          {audiencePlaybooks.map((item) => (
            <button
              key={item.key}
              className={activePlaybook === item.key ? 'active' : ''}
              onClick={() => setActivePlaybook(item.key)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        {selectedPlaybook && (
          <div className="playbook-panel">
            <div>
              <p className="eyebrow">Interactive view</p>
              <h3>{selectedPlaybook.headline}</h3>
              <p>{selectedPlaybook.body}</p>
              <div className="playbook-proof">{selectedPlaybook.proof}</div>
            </div>
            <div className="playbook-metrics">
              <div className="mini-stat">
                <span className="label">Mandate readiness</span>
                <strong>48 hrs</strong>
              </div>
              <div className="mini-stat">
                <span className="label">Specialist pods</span>
                <strong>6 teams</strong>
              </div>
              <div className="mini-stat">
                <span className="label">Confidence</span>
                <strong>ESG + diligence</strong>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="timeline-section light-surface">
        <div className="section-header">
          <h2>Our journey</h2>
          <p>The pathways that shaped Vistria Capital into a trusted luxury real estate ally.</p>
        </div>
        <div className="timeline-grid">
          {timeline.map((entry) => (
            <div key={entry.year} className="timeline-card">
              <span className="timeline-year">{entry.year}</span>
              <p>{entry.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recognition page-section">
        <div className="section-header">
          <h2>Recognition &amp; momentum</h2>
          <p>Milestones that reflect our purpose-driven growth across luxury and leisure mandates.</p>
        </div>
        <div className="value-grid">
          {recognitions.map((item) => (
            <div key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="market-reach light-surface section-animate" style={{ '--delay': '0.48s' }}>
        <div className="section-header">
          <h2>Market footprint</h2>
          <p>Where Vistria Capital (formerly Andlay Estates) is creating impact.</p>
        </div>
        <ul className="market-list">
          {marketCoverage.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </section>

      <section className="leadership page-section section-animate" style={{ '--delay': '0.6s' }}>
        <div className="section-header">
          <h2>Leadership</h2>
          <p>Abhishiekh Andlay anchors every mandate with legacy relationships and forward-looking vision.</p>
        </div>
        <div className="leadership-feature">
          {leadership.map((leader) => (
            <article key={leader.name} className="leader-card">
              {leader.image && (
                <div className="leader-portrait">
                  <img src={leader.image} alt={leader.name} loading="lazy" />
                </div>
              )}
              <div className="leader-content">
                <h3>{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <p>{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
