const BuilderChronologyPage = () => (
  <div className="chrono-wrap">
    <section className="page-hero chrono-hero">
      <p className="page-kicker">Insights · Builder chronology</p>
      <h1>Tracing launches, absorptions, and milestones</h1>
      <p className="page-subtitle">
        A rolling chronology of NCR developer activity, mapped to absorption velocity, pricing shifts, and policy triggers.
      </p>
    </section>

    <section className="page-section chrono-body">
      <div className="timeline-grid">
        {[
          {
            year: '2024',
            builder: 'DLF',
            logo: '/logos/cbre.png',
            highlight:
              'Premium launches across Dwarka Expressway sectors 102–113 hit 70% absorption within first 120 days, with price bands breaching ₹18,500 psf.',
          },
          {
            year: '2023',
            builder: 'Godrej Properties',
            logo: '/logos/colliers.png',
            highlight:
              'Golf Course Extension Road witnessed record pre-sales from branded residences; developer upgrades included ESG-ready specs and concierge living.',
          },
          {
            year: '2022',
            builder: 'M3M',
            logo: '/logos/jll.png',
            highlight:
              'Northern Peripheral Road inventory tightened as infrastructure commitments firmed; early movers recorded 16–21% capital appreciation within 12 months.',
          },
          {
            year: '2021',
            builder: 'Tata Housing',
            logo: '/logos/savills.png',
            highlight:
              'Policy signals around transit and social infra accelerated interest in integrated townships; developers pivoted to larger formats and flexible interiors.',
          },
        ].map((entry) => (
          <div key={entry.year} className="timeline-card">
            <span className="timeline-year">{entry.year}</span>
            <div className="timeline-builder">
              <img src={entry.logo} alt={`${entry.builder} logo`} className="timeline-logo" />
              <span className="timeline-builder-name">{entry.builder}</span>
            </div>
            <p>{entry.highlight}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default BuilderChronologyPage;
