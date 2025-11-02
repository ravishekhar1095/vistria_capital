const blogPosts = [
  {
    title: 'How infrastructure is redefining luxury demand in NCR',
    description:
      'We examine the Dwarka Expressway launch, airport connectivity, and Metro expansions that are recasting absorption trends — guided by institutional “brighter way” theses.',
    readTime: '6 min read',
    category: 'Market analysis',
  },
  {
    title: 'Designing residences around wellness and Vastu intelligence',
    description:
      'From light planning to elemental zoning, explore how Vistria Capital collaborates with consultants to integrate wellness-first spatial planning.',
    readTime: '5 min read',
    category: 'Design & wellbeing',
  },
  {
    title: 'Sustainable materials checklist for high-rise developments',
    description:
      'A field note on low-VOC finishes, smart glazing, and energy-efficient HVAC systems sourced from partner developers raising IGBC benchmarks.',
    readTime: '7 min read',
    category: 'ESG & sustainability',
  },
];

const BlogsPage = () => (
  <>
    <section className="page-hero soft-bg">
      <p className="page-kicker">Insights Blog</p>
      <h1>Thought leadership from the Vistria Capital desk</h1>
      <p className="page-subtitle">
        Micro-market intelligence, design inspiration, and sustainability playbooks for investors pursuing
        Delhi NCR’s most coveted residences.
      </p>
    </section>

    <section className="blogs page-section">
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="blog-card">
            <span className="blog-category">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div className="blog-footer">
              <span className="blog-readtime">{post.readTime}</span>
              <button type="button" className="btn outline" disabled>
                Coming soon
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default BlogsPage;
