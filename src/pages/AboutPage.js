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
      'Rebranded to Vistria Capital with a ₹350 Cr sales mandate, targeting 175 high-end units across Gurugram’s luxury corridors.',
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

const AboutPage = () => (
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

export default AboutPage;
