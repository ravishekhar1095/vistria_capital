const serviceLines = [
  {
    title: 'Capital Markets & Investments',
    detail:
      'Deal origination, bid strategy, and capital stack advisory that mirror global capital markets methodologies, tailored to private mandates.',
    tags: ['Deal sourcing', 'Capital stack', 'Bid strategy'],
    icon: 'https://img.icons8.com/external-others-inmotus-design/96/FFFFFF/external-Investment-architecture-others-inmotus-design.png',
  },
  {
    title: 'Residential Portfolio Strategy',
    detail:
      'Micro-market entry frameworks, pricing benchmarks, and hold/exit modelling backed by NCR absorption data and proprietary research insights.',
    tags: ['Micro-market', 'Pricing labs', 'Exit modelling'],
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/home-office.png',
  },
  {
    title: 'Transaction Governance',
    detail:
      'Developer negotiations, legal diligence, and milestone tracking orchestrated through structured deal rooms and institutional checklists.',
    tags: ['Legal desk', 'Milestone tracking', 'Negotiation'],
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/law.png',
  },
  {
    title: 'Client Experience & Lifestyle',
    detail:
      'Interior programming, wellness upgrades, and hospitality-grade concierge support to translate assets into lived experiences.',
    tags: ['Experience pods', 'Concierge', 'Design advisory'],
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/service-bell.png',
  },
  {
    title: 'Asset Performance Office',
    detail:
      'Leasing strategies, rental yield optimisation, and asset enhancement to keep portfolios agile across cycles.',
    tags: ['Leasing intelligence', 'Yield optimisation', 'Enhancements'],
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/combo-chart--v1.png',
  },
  {
    title: 'Sustainability & ESG Advisory',
    detail:
      'IGBC/GRIHA compliance, decarbonisation pathways, and climate resilience diagnostics aligned with global sustainability guidance.',
    tags: ['ESG audits', 'IGBC/GRIHA', 'Resilience plans'],
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/earth-planet.png',
  },
];

const servicePods = [
  {
    title: 'Mandate control desk',
    copy: 'Single point of command spanning research, deal execution, and client experience program managers.',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/strategy.png',
  },
  {
    title: 'Capital intelligence lab',
    copy: 'In-house research hub synthesising Knight Frank, ANAROCK, and proprietary dashboards for every mandate.',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/analytics.png',
  },
  {
    title: 'Lifestyle & design atelier',
    copy: 'Concierge partners and design studios delivering turnkey interiors, wellness integrations, and smart home upgrades.',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/sofa.png',
  },
  {
    title: 'Legal & compliance guild',
    copy: 'Curated legal advisors, documentation grids, and policy trackers aligned with evolving RERA governance.',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/approval.png',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
];

const serviceHighlights = [
  'Single mandate team spanning strategy, research, and capital',
  'Independent Indian brokerage heritage (formerly Andlay Estates)',
  'Partnership network spanning legal, wealth, and design collaborators',
];

const fallbackImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80';

const ServicesPage = () => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = fallbackImage;
  };

  return (
    <>
      <section className="services-hero dark-panel">
      <p className="page-kicker">Advisory Services</p>
      <h1>Bespoke intelligence for high-performing real estate portfolios</h1>
      <p className="page-subtitle">
        Vistria Capital fuses the rigour of integrated services models with a boutique desk dedicated
        to luxury residential investors in Delhi NCR.
      </p>
      <div className="page-pills">
        {serviceHighlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>

      <section className="services page-section">
        <div className="services-copy">
          <p className="eyebrow">Service spectrum</p>
          <h2>Structured pods engineered for clarity</h2>
        <p>
          Every mandate is powered by pods that synchronise capital advisory, research intelligence, and concierge delivery. Explore how
          each service line is built on the same dark crimson discipline as our landing page experience.
        </p>
      </div>
        <div className="service-grid">
          {serviceLines.map((service, index) => (
            <div key={service.title} className="service-card">
              <div className="service-card-head">
                <div className="service-card-icon">
                  <img src={service.icon} alt={`${service.title} icon`} loading="lazy" onError={handleImageError} />
                </div>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
              </div>
            <p>{service.detail}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="service-pods page-section">
        <div className="service-pods-grid">
          {servicePods.map((pod) => (
            <article key={pod.title} className="service-pod-card">
              <img src={pod.icon} alt={`${pod.title} icon`} loading="lazy" onError={handleImageError} />
              <h3>{pod.title}</h3>
              <p>{pod.copy}</p>
            </article>
          ))}
        </div>
        <div className="service-cta-panel">
          <h3>Bring your mandate to the desk</h3>
          <p>Share your brief and we will align the right pod &mdash; capital, design, or ESG &mdash; within 48 hours.</p>
          <button className="btn primary">Book a discovery call</button>
        </div>
      </section>

      <section className="services-gallery page-section">
        <div className="gallery-grid">
          {galleryImages.map((src) => (
            <div key={src} className="gallery-image">
              <img src={src} alt="Service experience" loading="lazy" onError={handleImageError} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
