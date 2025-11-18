const fallbackImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80';

const insights = [
  {
    title: 'Quarterly Market Pulse',
    image: 'https://images.unsplash.com/photo-1454165150880-8ddd4cd52a06?auto=format&fit=crop&w=1200&q=80',
    tone: 'dark',
    detail:
      'Dwarka Expressway micro-markets absorbed over 70% of new luxury inventory within 90 days of launch across 2024, outpacing Golf Course Extension in velocity.',
  },
  {
    title: 'Luxury Outlook Watch',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    detail:
      'Independent 2024 real estate outlooks flag Gurugram as the NCR epicentre for luxury demand, driven by infrastructure upgrades and integrated township formats.',
  },
  {
    title: 'Investor Spotlight',
    image: 'https://images.unsplash.com/photo-1461716301126-b3a80e704819?auto=format&fit=crop&w=1200&q=80',
    detail:
      'NRIs contributed 44% of transactions above ₹5 Cr in FY24, with GCC-based investors prioritising larger ticket sizes amid favourable currency movements.',
  },
  {
    title: 'Sustainability Lens',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
    detail:
      'All recommended projects comply with IGBC Platinum or GRIHA 4-star benchmarks, ensuring lower operating costs and long-term value protection.',
  },
  {
    title: 'Capital Markets Watch',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    detail:
      'Listed developers in NCR clocked record pre-sales of ₹28,000 Cr in FY24, led by differentiated luxury launches and shrinking unsold stock.',
  },
];

const dataPoints = [
  'Leading research underlines that integrated, mixed-use precincts will dominate NCR capital flows through 2025, favouring Dwarka Expressway and Golf Course belts.',
  '₹36,000 per sq ft benchmarks achieved on Golf Course Road for branded residences with experiential amenities.',
  'Average capital appreciation of 21% recorded on Dwarka Expressway luxury assets between FY22 and FY24 as per ANAROCK research.',
  'Premium housing inventory (₹3 Cr+) represents 28% of NCR launches in H1 2024, reflecting the shift to larger configurations.',
];

const InsightsPage = () => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = fallbackImage;
  };

  return (
    <>
      <section className="page-hero">
        <p className="page-kicker">Insights &amp; Research</p>
        <h1>Intelligence that powers every acquisition mandate</h1>
        <p className="page-subtitle">
          We translate on-ground absorption metrics, policy signals, and developer pulse into actionable dashboards for Vistria clients.
        </p>
      </section>

      <section className="insights page-section">
        {insights.map((insight) => (
          <div key={insight.title} className={`insight-card${insight.tone === 'dark' ? ' dark' : ''}`}>
            <div className="insight-media">
              <img src={insight.image} alt={`${insight.title} visual`} loading="lazy" onError={handleImageError} />
            </div>
            <h3>{insight.title}</h3>
            <p>{insight.detail}</p>
          </div>
        ))}
      </section>

      <section className="research-highlights">
        <div className="section-header">
          <h2>2024 Delhi NCR market takeaways</h2>
          <p>Key observations from Knight Frank, ANAROCK, and other independent research releases.</p>
        </div>
        <ul className="data-point-list">
          {dataPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default InsightsPage;
