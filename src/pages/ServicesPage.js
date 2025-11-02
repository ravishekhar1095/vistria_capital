const services = [
  {
    title: 'Capital Markets & Investments',
    detail:
      'Deal origination, bid strategy, and capital stack advisory that mirror global capital markets methodologies, tailored to private mandates.',
  },
  {
    title: 'Residential Portfolio Strategy',
    detail:
      'Micro-market entry frameworks, pricing benchmarks, and hold/exit modelling backed by NCR absorption data and proprietary research insights.',
  },
  {
    title: 'Transaction Governance',
    detail:
      'Developer negotiations, legal diligence, and milestone tracking orchestrated through structured deal rooms and institutional checklists.',
  },
  {
    title: 'Client Experience & Lifestyle',
    detail:
      'Interior programming, wellness upgrades, and hospitality-grade concierge support to translate assets into lived experiences.',
  },
  {
    title: 'Asset Performance Office',
    detail:
      'Leasing strategies, rental yield optimisation, and asset enhancement to keep portfolios agile across cycles.',
  },
  {
    title: 'Sustainability & ESG Advisory',
    detail:
      'IGBC/GRIHA compliance, decarbonisation pathways, and climate resilience diagnostics aligned with global sustainability guidance.',
  },
];

const serviceHighlights = [
  'Single mandate team spanning strategy, research, and capital',
  'Independent Indian brokerage heritage (formerly Andlay Estates)',
  'Partnership network spanning legal, wealth, and design collaborators',
];

const ServicesPage = () => (
  <>
    <section className="page-hero soft-bg">
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
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.detail}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default ServicesPage;
