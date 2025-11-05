import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';
import { motion } from 'framer-motion';
import { fadeInUp, simpleFade } from '../utils/motion';

const advisoryPillars = [
  {
    title: 'Capital Markets Advisory',
    detail:
      'Portfolio optimisation, developer collaborations, and bespoke investments modeled on our institutional-grade playbooks as a trusted channel partner.',
    cta: { label: 'Explore projects', to: '/projects' },
  },
  {
    title: 'Occupier & Lifestyle Solutions',
    detail:
      'End-to-end buyer representation, relocation concierge, and experience design delivered by an integrated in-house team with on-ground legacy.',
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
    label: 'Data-first brokerage',
    copy: 'Local absorption, pricing velocity, and policy signals distilled from in-house research and partner intelligence hubs.',
  },
  {
    label: 'Sustainability focus',
    copy: 'Each mandate evaluates ESG compliance, decarbonisation pathways, and wellness features for lasting value.',
  },
  {
    label: 'On-ground execution',
    copy: 'Developer negotiations, legal diligence, and possession oversight orchestrated by a dedicated deal desk rooted in NCR relationships.',
  },
  {
    label: 'Legacy & clarity',
    copy: 'A reimagined Andlay Estates heritage, clearly distinct from the US-based The Vistria Group, LP, while championing Indian luxury buyers.',
  },
];

const identityHighlights = [
  'Formerly Andlay Estates with legacy relationships across NCR developers.',
  'Independent Indian brokerage, not affiliated with the US-based The Vistria Group, LP.',
  'Expanding beyond Gurugram into Noida and leisure destinations such as Nainital.',
  'Progressive, data-led channel partner delivering luxury acquisitions since 2005.',
];

const videoReels = [
  {
    title: 'What Makes BPTP Verti Greens Sector 102 so SPECIAL?',
    summary: 'BPTP Amstoria Verti Greens — discover the vertical luxury features curated for Sector 102.',
    src: 'https://www.youtube.com/embed/G4yRkoNT5nU',
  },
  {
    title: 'Gurugram luxury micro-markets',
    summary: 'Experion NOVA at Windchants – 4 BHK luxury apartments in Gurgaon.',
    src: 'https://www.youtube.com/embed/koX8msEWBTI',
  },
  {
    title: 'Bhowali Valley Chalets preview',
    summary: 'TARC Ishva: Luxury living inspired by the golden ratio in Sector 63A, Gurgaon.',
    src: 'https://www.youtube.com/embed/EfnnBRxR3h4',
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
    {
      figure: '175 units',
      caption: 'FY22 sales target achieved across premium + luxury launches',
    },
  ];

  return (
    <>
      <motion.section
        className="hero refined-hero"
        variants={fadeInUp(0, 0.45)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className="hero-content" variants={simpleFade(0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          <div className="hero-eyebrow">Institutional-grade advisory model</div>
          <h1>Modern luxury real estate advisory crafted for Delhi NCR&rsquo;s most discerning investors</h1>
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
        </motion.div>
        <motion.div
          className="hero-showcase"
          variants={simpleFade(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="hero-card">
            <h3>Curated inventory</h3>
            <p>
              Channel partner for marquee launches on Golf Course Road, Dwarka Expressway, and Southern Peripheral
              Road with concierge acquisition management.
            </p>
          </div>
          <div className="hero-stats">
            {quickStats.map((item) => (
              <div key={item.caption}>
                <span className="figure">{item.figure}</span>
                <span className="caption">{item.caption}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="brand-promise" variants={fadeInUp(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="brand-promise__lead">
          <h2>See a brighter way with Vistria Capital</h2>
          <p>
            Taking cues from global integrated practices, we orchestrate advisory mandates that connect capital, opportunities,
            and sustainability outcomes for long-term wealth stewardship grounded in Gurgaon&rsquo;s most trusted brokerage legacy.
          </p>
        </div>
        <motion.div className="brand-promise__grid" variants={simpleFade(0.15)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {differentiators.map((item) => (
            <div key={item.label} className="brand-card">
              <h3>{item.label}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="pillars" variants={fadeInUp(0.24)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="section-header">
          <h2>Integrated advisory pillars</h2>
          <p>
            Built to mirror the breadth of leading international service portfolios while staying bespoke to private
            clients active in Delhi NCR.
          </p>
        </div>
        <motion.div className="pillars-grid" variants={simpleFade(0.18)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {advisoryPillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
              <Link to={pillar.cta.to} className="text-link">
                {pillar.cta.label} →
              </Link>
            </article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="identity-banner" variants={fadeInUp(0.34)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div>
          <span className="identity-pill">Legacy</span>
          <h2>Vistria Capital (formerly Andlay Estates)</h2>
          <p>
            A Gurugram-headquartered luxury real estate brokerage delivering integrity-first advisory while remaining distinctly
            Indian &mdash; not associated with the US private equity firm The Vistria Group, LP.
          </p>
        </div>
        <ul>
          {identityHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="video-reel" variants={fadeInUp(0.42)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="section-header">
          <h2>Short-form insights &amp; walkthroughs</h2>
          <p>Reels designed for Instagram-ready storytelling across Gurugram luxury assets and leisure escapes.</p>
        </div>
        <div className="reel-grid">
          {videoReels.map((reel) => (
            <article key={reel.title} className="reel-card">
              <div className="reel-frame">
                <iframe
                  src={reel.src}
                  title={reel.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3>{reel.title}</h3>
              <p>{reel.summary}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section className="intro light-surface" variants={fadeInUp(0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="intro-card" variants={simpleFade(0.08)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
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
        </motion.div>
        <div className="intro-highlights">
          <div className="highlight">
            <h3>Neighbourhood curation</h3>
            <p>Focus on growth corridors with proven absorption &mdash; Dwarka Expressway, Golf Course Road, and SPR.</p>
          </div>
          <div className="highlight">
            <h3>Transaction governance</h3>
            <p>Deal rooms, documentation grids, and milestone reporting patterned on enterprise-grade standards.</p>
          </div>
          <div className="highlight">
            <h3>Experience delivery</h3>
            <p>Handovers enhanced with design partners, sustainability retrofits, and smart home integrations.</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="vastu-experience" variants={fadeInUp(0.64)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="vastu-media" variants={simpleFade(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
          <iframe
            src="https://www.youtube.com/embed/zPSwZAQnbIY"
            title="Vastu aligned luxury living"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
        <motion.div className="vastu-copy" variants={simpleFade(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <h2>Vastu-aligned living for elevated wellbeing</h2>
          <p>
            Drawing on insights from Vastu consultants collaborating with our design advisory teams, Vistria
            Capital curates residences that harmonise energy flow with luxury aesthetics. From orienting master
            suites to integrating meditation decks, we ensure your next address nurtures balance, prosperity, and calm.
          </p>
          <ul>
            <li>North-east wellness cores with diffused daylight and biophilic materials.</li>
            <li>Kitchen and service zoning positioned along south-east quadrants for elemental alignment.</li>
            <li>Customisable pooja and meditation suites enhanced with acoustic and lighting design.</li>
            <li>On-demand Vastu audits during layout customization and fit-out stages.</li>
          </ul>
          <div>
            <Link to="/contact" className="text-link">
              Request a Vastu consultation →
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="news-section" variants={fadeInUp(0.74)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="section-header">
          <h2>Live market intel &mdash; Delhi NCR</h2>
          <p>Curated updates from primary releases across Knight Frank, ANAROCK, and policy briefings.</p>
        </div>
        <motion.div className="news-grid" variants={simpleFade(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
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
        </motion.div>
      </motion.section>
    </>
  );
};

export default LandingPage;
