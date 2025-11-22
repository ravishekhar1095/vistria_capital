const heroStats = [
  { value: '15+', label: 'Senior advisors' },
  { value: '24h', label: 'Mandate SLA' },
  { value: '8 cities', label: 'Concierge coverage' },
];
const conciergePerks = [
  'Personalized site visits',
  'Dedicated WhatsApp desk',
  'White-glove transaction coordination',
  'Direct access to senior advisors',
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vistria-capital/', icon: 'https://img.icons8.com/color/48/linkedin.png' },
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'https://img.icons8.com/color/48/instagram-new.png' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'https://img.icons8.com/color/48/youtube-play.png' },
];

const ContactPage = () => (
  <>
    <section className="page-hero contact-hero">
      <p className="page-kicker">Private Client Desk</p>
      <h1>Plan your next acquisition with Vistria Capital</h1>
      <p className="page-subtitle">
        Partner with senior advisors for capital allocation, site visits, and transaction closure in record time. Share your objectives
        and we will secure a discreet consultation window.
      </p>
      <div className="contact-hero-stats">
        {heroStats.map((stat) => (
          <div key={stat.label} className="contact-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="contact contact-shell contact-grid">
      <div className="contact-card contact-card--highlight">
        <h2>Schedule a consultation</h2>
        <p>
          Tell us about your investment thesis, ticket size, and preferred micro-markets so our desk can tailor the right opportunities.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <label>
              Name
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="name@company.com" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Investment Range
              <select defaultValue="">
                <option value="" disabled>
                  Select range
                </option>
                <option>₹3 - 5 Cr</option>
                <option>₹5 - 8 Cr</option>
                <option>₹8 - 12 Cr</option>
                <option>₹12 Cr+</option>
              </select>
            </label>
            <label>
              Preferred Micro-market
              <input type="text" placeholder="e.g. Dwarka Expressway" />
            </label>
          </div>
          <label>
            How can we help?
            <textarea rows="4" placeholder="Share your goals or schedule request" />
          </label>
          <button type="submit" className="btn primary full-width">
            Submit request
          </button>
        </form>
      </div>
      <div className="contact-card contact-card--highlight">
        <div className="contact-detail-block">
          <p className="eyebrow">Visit us</p>
          <h3>Nirvana Courtyard, Sector 50</h3>
          <p>Gurugram, Haryana 122018, India</p>
        </div>
        <div className="contact-detail-block">
          <p className="eyebrow">Concierge perks</p>
          <ul className="concierge-list">
            {conciergePerks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>
        <div className="contact-detail-block">
          <p className="eyebrow">Talk directly</p>
          <div className="contact-actions">
            <a href="https://wa.me/919560700707" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp icon" />
              <div>
                <span>WhatsApp desk</span>
                <strong>+91 9560700707</strong>
              </div>
            </a>
            <a href="mailto:info@vistriacapital.com">
              <img src="https://img.icons8.com/color/48/apple-mail.png" alt="Mail icon" />
              <div>
                <span>Email the partners</span>
                <strong>info@vistriacapital.com</strong>
              </div>
            </a>
            <a href="tel:+911241234567">
              <img src="https://img.icons8.com/color/48/apple-phone.png" alt="Phone icon" />
              <div>
                <span>Private call</span>
                <strong>+91 124 123 4567</strong>
              </div>
            </a>
          </div>
        </div>
        <div className="contact-detail-block">
          <p className="eyebrow">Follow insights</p>
          <div className="contact-social-icons">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <img src={link.icon} alt={`${link.label} icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
