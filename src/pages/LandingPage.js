import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';

const heroMentions = ['Knight Frank India', 'ANAROCK Research', 'CREDAI NCR'];

const socialIcons = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vistria-capital/', icon: 'https://img.icons8.com/color/48/linkedin.png' },
  { label: 'Twitter', href: 'https://twitter.com/', icon: 'https://img.icons8.com/color/48/twitter--v1.png' },
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'https://img.icons8.com/color/48/instagram-new.png' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'https://img.icons8.com/color/48/youtube-play.png' },
];

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

const momentumHighlights = [
  {
    value: '₹2,450 Cr',
    label: 'Capital placed since 2021',
    detail: 'Exclusive mandates across Golf Course Road, Dwarka Expressway, and SPR.',
  },
  {
    value: '92 days',
    label: 'Average closure cycle',
    detail: 'From concierge brief to signed MoU with curated partners.',
  },
  {
    value: '42 briefs',
    label: 'Active UHNI buyer mandates',
    detail: 'Live transactions spanning penthouses, farm estates, and branded villas.',
  },
];

const timelineMilestones = [
  {
    year: '2021',
    title: 'Legacy transformation',
    detail: 'Andlay Estates transitions into Vistria Capital with a sharper investment lens.',
  },
  {
    year: '2022',
    title: 'Capital desk rollout',
    detail: 'Dedicated deal desk for institutional referrals launched across NCR.',
  },
  {
    year: '2023',
    title: 'Leisure expansion',
    detail: 'Mandates added for Kumaon chalets, Goa villas, and Himalayan retreats.',
  },
  {
    year: '2024',
    title: 'Dwarka Expressway focus',
    detail: 'Pipeline prioritises handovers around infrastructure unlock milestones.',
  },
];

const microMarkets = [
  {
    name: 'Golf Course Road / Ext.',
    stat: '91% luxury absorption',
    detail: 'Consistent premium pricing powered by branded residences and global schools.',
  },
  {
    name: 'Dwarka Expressway',
    stat: '24% QoQ price appreciation',
    detail: 'Infra-ready corridors attracting NRIs for ready-to-move 4 & 5 BHK assets.',
  },
  {
    name: 'Southern Peripheral Road',
    stat: '12M sq.ft. under planning',
    detail: 'Mixed-use masterplans and SCO launches elevating end-user demand.',
  },
  {
    name: 'Noida & Leisure belts',
    stat: '2 hr connect radius',
    detail: 'Managed second homes in Nainital, Bhowali, and coastal Goa communities.',
  },
];

const partnerAlliances = [
  { label: 'Knight Frank Research', tag: 'Market intelligence' },
  { label: 'ANAROCK Channel Partner', tag: 'Primary launches' },
  { label: 'CREDAI NCR', tag: 'Policy advocacy' },
  { label: 'Design Bridge', tag: 'Experience staging' },
];

const conciergePrograms = [
  {
    title: 'Private Capital Desk',
    summary: 'High-touch consulting for family offices seeking trophy assets or yield-led holdings.',
    bullets: ['Risk-mapped shortlists delivered within 48 hours.', 'Deal rooms with legal + valuation partners.'],
  },
  {
    title: 'Lifestyle Relocation Lab',
    summary: 'Concierge for globally mobile buyers balancing school, commute, and club ecosystems.',
    bullets: ['End-to-end tours with hospitality coordination.', 'Post-possession design and automation playbooks.'],
  },
  {
    title: 'Developer Collaboration Studio',
    summary: 'Structured alliances for boutique developers to reposition premium launches.',
    bullets: ['Demand simulations & absorption dashboards.', 'On-ground activation & influencer walk-throughs.'],
  },
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

const investmentSteps = [
  {
    title: 'Neighbourhood curation',
    detail: 'Focus on growth corridors with proven absorption &mdash; Dwarka Expressway, Golf Course Road, and SPR.',
  },
  {
    title: 'Transaction governance',
    detail: 'Deal rooms, documentation grids, and milestone reporting patterned on enterprise-grade standards.',
  },
  {
    title: 'Experience delivery',
    detail: 'Handovers enhanced with design partners, sustainability retrofits, and smart home integrations.',
  },
  {
    title: 'After-sales stewardship',
    detail: 'Dedicated concierge pods track snag closures, warranties, and personalization requests post-possession.',
  },
];

const dueDiligenceChecks = [
  {
    title: 'Regulatory & title integrity',
    detail: 'RERA compliance, title chain audits, escrow structures, and covenant reviews before shortlisting.',
  },
  {
    title: 'Financial modelling',
    detail: 'Cash-flow sensitivity testing, rental yield benchmarking, and IRR scenarios tailored to each mandate.',
  },
  {
    title: 'Design & sustainability audits',
    detail: 'ESG scoring, wellness metrics, and partner workshops covering acoustics, lighting, and retrofits.',
  },
];

const mandateAssurances = [
  { value: '48 hrs', label: 'Deal room activation' },
  { value: '6 pods', label: 'Specialist teams across legal, design, finance' },
  { value: '5+ banks', label: 'Priority lending and NBFC alliances' },
];

const logoCarousel = [
  {
    name: 'Knight Frank',
    src: '/logos/knight-frank.png',
  },
  { name: 'CBRE', src: '/logos/cbre.png' },
  { name: 'JLL', src: '/logos/jll.png' },
  {
    name: 'Cushman & Wakefield',
    src: '/logos/cushman.png',
  },
  {
    name: 'Colliers',
    src: '/logos/colliers.png',
  },
  { name: 'Savills', src: '/logos/savills.png' },
  {
    name: "Sotheby's International Realty",
    src: '/logos/sothebys.png',
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
    <div className="landing-flow">
      <section className="hero refined-hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Institutional-grade advisory model</div>
          <h1>Modern luxury real estate advisory crafted for Delhi NCR&rsquo;s most discerning investors</h1>
          <p className="hero-subtitle">
            Vistria Capital combines institutional-grade research, capital markets intelligence, and concierge
            execution to deliver landmark residences across Gurugaon&rsquo;s most resilient neighbourhoods.
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
          <div className="hero-proof">
            <span>Referenced by</span>
            <div className="hero-proof-logos">
              {heroMentions.map((mention) => (
                <span key={mention}>{mention}</span>
              ))}
            </div>
          </div>
          <div className="hero-social">
            <span>Connect</span>
            <div className="hero-social-links">
              {socialIcons.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <img src={social.icon} alt={`${social.label} icon`} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-showcase">
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
        </div>
      </section>

      <section className="logo-carousel">
        <div className="logo-carousel__copy">
          <p className="eyebrow">Ecosystem allies</p>
          <h2>Builder Chronology</h2>
        </div>
        <div className="logo-carousel__rail">
          <div className="logo-carousel__track">
            {[...logoCarousel, ...logoCarousel].map((logo, index) => (
              <div className="logo-chip" key={`${logo.name}-${index}`}>
                <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="momentum-panel">
        <div className="momentum-intro">
          <p className="eyebrow">Mandate velocity</p>
          <h2>Momentum that mirrors institutional deal rooms</h2>
          <p>
            Every brief is tracked through a proprietary pipeline ensuring capital market governance across sourcing, diligence,
            and design delivery.
          </p>
        </div>
        <div className="momentum-grid">
          <div className="momentum-stats">
            {momentumHighlights.map((item) => (
              <article key={item.label} className="momentum-card">
                <span className="metric">{item.value}</span>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="momentum-timeline">
            {timelineMilestones.map((milestone) => (
              <div key={milestone.year} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-promise">
        <div className="brand-promise__lead">
          <h2>See a brighter way with Vistria Capital</h2>
          <p>
            Taking cues from global integrated practices, we orchestrate advisory mandates that connect capital, opportunities,
            and sustainability outcomes for long-term wealth stewardship grounded in Gurgaon&rsquo;s most trusted brokerage legacy.
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
            Built to mirror the breadth of leading international service portfolios while staying bespoke to private
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

      <section className="market-reach">
        <div className="section-header">
          <h2>Focused on resilient micro-markets</h2>
          <p>Coverage spans NCR&rsquo;s most liquid corridors along with experiential escapes within a two-hour flight radius.</p>
        </div>
        <div className="market-reach-grid">
          {microMarkets.map((market) => (
            <article key={market.name} className="micro-market">
              <header>
                <h3>{market.name}</h3>
                <span>{market.stat}</span>
              </header>
              <p>{market.detail}</p>
            </article>
          ))}
        </div>
        <div className="market-partners">
          {partnerAlliances.map((partner) => (
            <div key={partner.label} className="partner-badge">
              <span>{partner.tag}</span>
              <strong>{partner.label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="identity-banner">
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
      </section>

      <section className="concierge-network">
        <div className="concierge-copy">
          <p className="eyebrow">Concierge ecosystem</p>
          <h2>Structured teams across advisory, design, and after-sales</h2>
          <p>
            Dedicated pods ensure every stakeholder &mdash; from buyers to boutique developers &mdash; receives white-glove execution
            without diluting the dark red brand aesthetic Vistria is known for.
          </p>
          <Link to="/contact" className="btn outline dark">
            Meet the mandate desk
          </Link>
        </div>
        <div className="concierge-programs">
          {conciergePrograms.map((program) => (
            <article key={program.title} className="concierge-card">
              <h3>{program.title}</h3>
              <p>{program.summary}</p>
              <ul>
                {program.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="video-reel">
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
      </section>

      <section className="intro light-surface">
        <div className="intro-card">
          <div className="intro-card-head">
            <span className="eyebrow">Mandate control room</span>
            <h2>Invest with conviction</h2>
            <p>
              Each opportunity is screened through regulatory, financial, and ESG lenses, while our transaction
              managers coordinate due diligence, financing, and post-possession enhancements.
            </p>
          </div>
          <div className="intro-card-grid">
            <div className="intro-checklist">
              {dueDiligenceChecks.map((item, index) => (
                <div key={item.title} className="intro-check">
                  <span className="intro-check-index">0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="intro-assurances">
              {mandateAssurances.map((assurance) => (
                <div key={assurance.value} className="intro-assurance">
                  <span className="assurance-value">{assurance.value}</span>
                  <p>{assurance.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="intro-pipelines">
            {investmentSteps.map((step, index) => (
              <div key={step.title} className="intro-mini-card">
                <div className="intro-mini-header">
                  <span className="intro-mini-index">0{index + 1}</span>
                  <h3 dangerouslySetInnerHTML={{ __html: step.title }} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: step.detail }} />
              </div>
            ))}
          </div>
          <div className="intro-cta">
            <Link to="/services" className="btn primary">
              Discover the mandate journey
            </Link>
          </div>
        </div>
      </section>

      <section className="vastu-experience">
        <div className="vastu-media">
          <iframe
            src="https://www.youtube.com/embed/zPSwZAQnbIY"
            title="Vastu aligned luxury living"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="vastu-copy">
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
        </div>
      </section>

      <section className="news-section">
        <div className="section-header">
          <h2>Live market intel &mdash; Delhi NCR</h2>
          <p>Curated updates from primary releases across Knight Frank, ANAROCK, and policy briefings.</p>
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
    </div>
  );
};

export default LandingPage;
