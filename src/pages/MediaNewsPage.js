import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const heroStats = [
  { value: '12+', label: 'Press features YTD' },
  { value: '5', label: 'Awards since 2023' },
  { value: '18k+', label: 'Monthly media impressions' },
];

const mediaHighlights = [
  {
    title: 'Vistria Capital on the NCR Luxury Outlook 2024',
    summary:
      'Our managing partner joined an NCR leadership panel to decode Gurugram’s luxury absorption, spotlighting infrastructure-led demand on Dwarka Expressway.',
    type: 'Panel feature',
    linkLabel: 'Watch recap',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Economic Times Real Estate Excellence Awards',
    summary:
      'Recognised as “Emerging Luxury Advisory” for our data-backed mandate design and ESG diligence anchored in institutional global frameworks.',
    type: 'Awards',
    linkLabel: 'View announcement',
    image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mint Lounge | The rise of branded residences',
    summary:
      'We shared insights on how international hospitality tie-ups and wellness amenities are reshaping NCR’s prime residential segment in 2025.',
    type: 'Press coverage',
    linkLabel: 'Read article',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
];

const trendStories = [
  {
    title: 'Dwarka Expressway unlock fuels premium launches',
    outlet: 'Business Standard',
    date: 'April 2025',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Wellness amenities define new era of branded residences',
    outlet: 'Mint Lounge',
    date: 'March 2025',
    image: 'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'NCR’s NRIs bet big on ₹5 Cr+ trophy assets',
    outlet: 'Economic Times Realty',
    date: 'February 2025',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
  },
];

const marqueeItems = [
  'NCR luxury launches jump 22% YoY · Knight Frank',
  'Dwarka Expressway slated for October ribbon cutting',
  'IGBC Platinum projects dominate Vistria mandates',
  'Premium absorption crosses 70% in Q1 FY25',
  'Golf Course Ext. leads price appreciation at 11% YoY',
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

const fallbackImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80';

const MediaNewsPage = () => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = fallbackImage;
  };

  const [liveStories, setLiveStories] = useState([]);
  const [liveError, setLiveError] = useState('');

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWSDATA_KEY;
    if (!apiKey) {
      setLiveError('Add REACT_APP_NEWDATA_KEY to enable live feeds.');
      return;
    }

    const controller = new AbortController();

    const fetchLiveNews = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${apiKey}&q=real%20estate%20Delhi%20NCR&country=in&language=en&category=business`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error('Unable to fetch live news');
        const data = await response.json();
        setLiveStories(
          (data?.results || []).slice(0, 4).map((item) => ({
            title: item.title,
            source: item.source_id,
            pubDate: item.pubDate,
            image_url: item.image_url,
            link: item.link,
          }))
        );
        setLiveError('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setLiveError('Live feed unavailable. Showing curated insights.');
          setLiveStories([]);
        }
      }
    };

    fetchLiveNews();

    return () => controller.abort();
  }, []);

  return (
    <>
      <section className="media-hero page-hero dark-panel">
        <div className="media-hero__copy">
          <p className="page-kicker">Media &amp; News</p>
          <h1>Tracking every headline that shapes Vistria Capital</h1>
          <p className="page-subtitle">
            Stay current with our latest press coverage, industry recognition, and proprietary market releases rooted in institutional research discipline.
          </p>
          <div className="media-hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="media-marquee">
          <div className="marquee-track">
            {marqueeItems.map((headline) => (
              <span key={headline}>{headline}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="media-feature-grid page-section" id="press-awards">
        {mediaHighlights.map((item) => (
          <article key={item.title} className="media-card">
            <span className="media-type">{item.type}</span>
            <div className="media-image">
              <img src={item.image} alt={item.title} loading="lazy" onError={handleImageError} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span className="media-action">{item.linkLabel} · coming soon</span>
          </article>
        ))}
      </section>

      <section className="media-trends page-section">
        <div className="section-header">
          <h2>Trending real estate coverage</h2>
          <p>Hand-picked Delhi NCR headlines. Swap this data with your API output later.</p>
        </div>
        <div className="trend-grid">
          {trendStories.map((story) => (
            <article key={story.title} className="trend-card">
              <div className="trend-media">
                <img src={story.image} alt={story.title} loading="lazy" onError={handleImageError} />
              </div>
              <div className="trend-content">
                <span>{story.outlet}</span>
                <h3>{story.title}</h3>
                <p>{story.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="live-stream page-section" id="live-desk">
        <div className="section-header">
          <h2>Live NCR buzz</h2>
          <p>Powered by Newsdata.io once your API key is provided. Replace env var to go live.</p>
        </div>
        {liveError && <p className="live-error">{liveError}</p>}
        <div className="live-grid">
          {liveStories.length === 0 && !liveError && <p className="live-placeholder">Fetching latest headlines…</p>}
          {liveStories.length === 0 && liveError && (
            <div className="live-placeholder">
              <p>Example outlets: Knight Frank, Economic Times, CREDAI updates.</p>
            </div>
          )}
          {liveStories.map((story) => (
            <article key={story.link} className="live-card">
              {story.image_url && (
                <div className="live-media">
                  <img src={story.image_url} alt={story.title} loading="lazy" onError={handleImageError} />
                </div>
              )}
              <div className="live-content">
                <span>{story.source}</span>
                <h3>{story.title}</h3>
                <p>{new Date(story.pubDate).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</p>
                <a href={story.link} target="_blank" rel="noreferrer">
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>
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

      <section className="video-reel page-section">
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

      <section className="vastu-experience page-section">
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
    </>
  );
};

export default MediaNewsPage;
