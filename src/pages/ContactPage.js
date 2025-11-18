const heroStats = [
  { value: '15+', label: 'Senior advisors' },
  { value: '24h', label: 'Mandate SLA' },
  { value: '8 cities', label: 'Concierge coverage' },
];

const contactChannels = [
  {
    title: 'WhatsApp desk',
    value: '+91 9560700707',
    icon: 'https://img.icons8.com/color/48/whatsapp--v1.png',
    link: 'https://wa.me/919560700707',
  },
  {
    title: 'Email partners',
    value: 'info@vistriacapital.com',
    icon: 'https://img.icons8.com/color/48/apple-mail.png',
    link: 'mailto:info@vistriacapital.com',
  },
  {
    title: 'Private call',
    value: '+91 124 123 4567',
    icon: 'https://img.icons8.com/color/48/apple-phone.png',
    link: 'tel:+911241234567',
  },
];

const contactPillars = [
  {
    title: 'Mandate concierge',
    detail: 'Private walkthroughs, NDAs, and shortlist briefings curated by senior partners.',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/conference-call.png',
  },
  {
    title: 'Documentation desk',
    detail: 'Sanction letters, term sheets, and legal diligence orchestrated end-to-end.',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/documents.png',
  },
  {
    title: 'After-sales studio',
    detail: 'Designers, sustainability advisors, and automation specialists on standby.',
    icon: 'https://img.icons8.com/ios-filled/100/ffffff/light.png',
  },
];

const conciergePerks = [
  'Exclusive WhatsApp briefings for UHNI desks',
  'Private walkthroughs with developer CXOs',
  'Banking liaison for sanction letters & locker opening',
  'Post-possession design partners & wellness consultants',
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vistria-capital/', icon: 'https://img.icons8.com/color/48/linkedin.png' },
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'https://img.icons8.com/color/48/instagram-new.png' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'https://img.icons8.com/color/48/youtube-play.png' },
];

const contactShowcase = {
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80',
  title: 'Command center in Gurugram',
  copy: 'Walk into our Golf Course Road base for immersive previews, data rooms, and virtual walkthroughs that mirror institutional deal rooms.',
  bullets: ['360° floor plan tours', 'Immersive VR previews', 'Onsite analyst support'],
};

const ContactPage = () => (
  <>
    <section className="page-hero soft-bg contact-hero">
      <p className="page-kicker">Private Client Desk</p>
      <h1>Plan your next acquisition with Vistria Capital</h1>
      <p className="page-subtitle">
        Partner with our senior advisors for capital allocation, site visits, and transaction closure in record time. Share your objectives
        and we will secure a discreet consultation window.
      </p>
      <div className="hero-stats">
        {heroStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="contact-panels page-section">
      <div className="contact-panel contact-channel-panel">
        <h3>Connect instantly</h3>
        <div className="contact-channel-list">
          {contactChannels.map((channel) => (
            <a key={channel.title} href={channel.link} target="_blank" rel="noreferrer">
              <img src={channel.icon} alt={`${channel.title} icon`} loading="lazy" />
              <div>
                <span>{channel.title}</span>
                <strong>{channel.value}</strong>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="contact-panel contact-showcase">
        <div className="contact-showcase__media">
          <img src={contactShowcase.image} alt="Vistria Capital command center" loading="lazy" />
        </div>
        <div className="contact-showcase__content">
          <h3>{contactShowcase.title}</h3>
          <p>{contactShowcase.copy}</p>
          <ul>
            {contactShowcase.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="contact-pillars page-section">
      {contactPillars.map((pillar) => (
        <article key={pillar.title} className="contact-pillar-card">
          <div className="contact-pillar-icon">
            <img src={pillar.icon} alt={`${pillar.title} icon`} loading="lazy" />
          </div>
          <div>
            <h3>{pillar.title}</h3>
            <p>{pillar.detail}</p>
          </div>
        </article>
      ))}
    </section>

    <section className="contact">
      <div className="contact-card">
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
      <div className="contact-details">
        <div>
          <h3>Visit us</h3>
          <p>
            Vistria Capital
            <br />
            Two Horizon Center, Golf Course Road, Gurugram
          </p>
        </div>
        <div>
          <h3>Concierge perks</h3>
          <ul className="concierge-list">
            {conciergePerks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Talk directly</h3>
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
        <div className="contact-social">
          <h3>Follow insights</h3>
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
