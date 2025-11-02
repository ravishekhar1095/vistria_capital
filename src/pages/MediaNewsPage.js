const mediaHighlights = [
  {
    title: 'Vistria Capital on the NCR Luxury Outlook 2024',
    summary:
      'Our managing partner joined an NCR leadership panel to decode Gurugram’s luxury absorption, spotlighting infrastructure-led demand on Dwarka Expressway.',
    type: 'Panel feature',
    linkLabel: 'Watch recap',
  },
  {
    title: 'Economic Times Real Estate Excellence Awards',
    summary:
      'Recognised as “Emerging Luxury Advisory” for our data-backed mandate design and ESG diligence anchored in institutional global frameworks.',
    type: 'Awards',
    linkLabel: 'View announcement',
  },
  {
    title: 'Mint Lounge | The rise of branded residences',
    summary:
      'We shared insights on how international hospitality tie-ups and wellness amenities are reshaping NCR’s prime residential segment in 2025.',
    type: 'Press coverage',
    linkLabel: 'Read article',
  },
];

const newsroom = [
  {
    headline: 'Quarterly Luxury Market Note — Q1 FY25',
    detail:
      'Dwarka Expressway recorded 18% QoQ growth in new launches, while Golf Course Extension maintained price leadership at ₹32,500 per sq ft.',
    date: 'April 2025',
  },
  {
    headline: 'Vistria Capital launches Global Investor Desk',
    detail:
      'Dedicated channel for NRIs and family offices in Singapore and Dubai, integrating cross-border capital markets specialists.',
    date: 'March 2025',
  },
  {
    headline: 'Sustainability Bulletin',
    detail:
      'Three partner developers achieved IGBC Platinum pre-certification with Vistria’s ESG advisory and materials roadmap.',
    date: 'February 2025',
  },
];

const MediaNewsPage = () => (
  <>
    <section className="page-hero">
      <p className="page-kicker">Media &amp; News</p>
      <h1>Tracking every headline that shapes Vistria Capital</h1>
      <p className="page-subtitle">
        Stay current with our latest press coverage, industry recognition, and proprietary market releases rooted
        in institutional research discipline.
      </p>
    </section>

    <section className="media-feature-grid page-section">
      {mediaHighlights.map((item) => (
        <article key={item.title} className="media-card">
          <span className="media-type">{item.type}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <span className="media-action">{item.linkLabel} · coming soon</span>
        </article>
      ))}
    </section>

    <section className="newsroom page-section light-surface">
      <div className="section-header">
        <h2>Newsroom</h2>
        <p>Quarterly dispatches and desk updates curated for stakeholders and clients.</p>
      </div>
      <div className="newsroom-grid">
        {newsroom.map((note) => (
          <div key={note.headline} className="newsroom-card">
            <span className="newsroom-date">{note.date}</span>
            <h3>{note.headline}</h3>
            <p>{note.detail}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default MediaNewsPage;
