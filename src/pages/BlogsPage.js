import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const blogTopics = ['Market outlook', 'Design & lifestyle', 'Capital desks', 'ESG', 'Second homes', 'NRI intelligence'];

const BlogsPage = () => {
  const [spotlightArticle, ...otherPosts] = blogs;

  return (
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
      <div className="blogs-topics">
        <p>Browse topics</p>
        <div className="topics-row">
          {blogTopics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      </div>

      <article className="blog-featured">
        <div className="featured-header">
          <span className="blog-category">{spotlightArticle.category}</span>
          <div className="featured-tags">
            {spotlightArticle.tags.map((tag) => (
              <span key={tag} className="featured-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h2>{spotlightArticle.title}</h2>
        <p>{spotlightArticle.summary}</p>
        <div className="featured-meta">
          <div>
            <strong>{spotlightArticle.author}</strong>
            <span>{spotlightArticle.date}</span>
          </div>
          <span className="blog-readtime">{spotlightArticle.readTime}</span>
          <Link to={`/blogs/${spotlightArticle.slug}`} className="btn primary">
            Read article
          </Link>
        </div>
      </article>

      <div className="blog-grid">
        {otherPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <span className="blog-category">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <div className="blog-footer">
              <span className="blog-readtime">{post.readTime}</span>
              <Link to={`/blogs/${post.slug}`} className="btn outline">
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
  );
};

export default BlogsPage;
