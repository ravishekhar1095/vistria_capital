import { Link, useParams } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const article = blogs.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="page-hero soft-bg">
        <h1>Article not found</h1>
        <p className="page-subtitle">The blog you are looking for has been moved or no longer exists.</p>
        <Link to="/blogs" className="btn outline">
          Back to blogs
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="blog-detail-hero">
        <div className="blog-detail-head">
          <span className="blog-category">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <div className="blog-detail-meta">
            <div>
              <strong>{article.author}</strong>
              <span>{article.date}</span>
            </div>
            <span className="blog-readtime">{article.readTime}</span>
            <span className="blog-location">{article.location}</span>
          </div>
          <div className="featured-tags">
            {article.tags.map((tag) => (
              <span key={tag} className="featured-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="blog-detail-visual">
          <img src={article.heroImage} alt={article.title} loading="lazy" />
        </div>
      </section>

      <section className="blog-detail-body page-section">
        <div className="blog-detail-highlights">
          <h3>Key highlights</h3>
          <ul>
            {article.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="blog-detail-content">
          {article.sections.map((section) => (
            <article key={section.heading}>
              <h4>{section.heading}</h4>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
        <div className="blog-detail-cta">
          <Link to="/contact" className="btn primary">
            Discuss a mandate
          </Link>
          <Link to="/projects" className="btn outline">
            Explore projects
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;
