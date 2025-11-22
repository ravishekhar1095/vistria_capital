const ArticlesPage = () => (
  <>
    <section className="page-hero">
      <p className="page-kicker">Insights · Articles</p>
      <h1>Deep dives on capital markets, luxury living, and policy</h1>
      <p className="page-subtitle">Curated reads for investors and partners tracking NCR&rsquo;s premium segments.</p>
    </section>

    <section className="blogs page-section">
      <div className="blogs-grid">
        {[
          {
            title: 'Why Golf Course belts stay resilient',
            readTime: '6 min read',
            summary: 'Absorption data, social infra, and brand-led differentiation that sustain premium valuations.',
          },
          {
            title: 'ESG as a value moat',
            readTime: '5 min read',
            summary: 'How IGBC/GRIHA compliance and wellness design boost long-term rental and resale performance.',
          },
          {
            title: 'Leisure homes as balanced assets',
            readTime: '4 min read',
            summary: 'Nainital and Goa case studies on yield, usage, and lifestyle returns for Delhi NCR investors.',
          },
        ].map((article) => (
          <article key={article.title} className="blog-card">
            <div className="blog-card-head">
              <h3>{article.title}</h3>
              <span className="blog-readtime">{article.readTime}</span>
            </div>
            <p>{article.summary}</p>
            <button className="btn outline" type="button" disabled>
              Coming soon
            </button>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default ArticlesPage;
