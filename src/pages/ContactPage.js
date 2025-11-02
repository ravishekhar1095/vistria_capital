const contactHighlights = [
  'Replies within one business day',
  'Confidential, invite-only previews',
  'Developer + banking partner network',
];

const ContactPage = () => (
  <>
    <section className="page-hero soft-bg">
      <p className="page-kicker">Private Client Desk</p>
      <h1>Plan your next acquisition with Vistria Capital</h1>
      <p className="page-subtitle">
        Partner with our senior advisors for capital allocation, site visits, and transaction closure in
        record time. Share your objectives and we will secure a discreet consultation window.
      </p>
      <div className="page-pills">
        {contactHighlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>

    <section className="contact">
      <div className="contact-card">
        <h2>Schedule a consultation</h2>
        <p>
          Tell us about your investment thesis, ticket size, and preferred micro-markets so our desk can tailor
          the right opportunities.
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
            Vistria Capital Experience Lounge
            <br />
            Two Horizon Center, Golf Course Road, Gurugram
          </p>
        </div>
        <div>
          <h3>Connect</h3>
          <p>
            +91 124 555 8800
            <br />
            concierge@vistriacapital.com
          </p>
        </div>
        <div>
          <h3>Follow insights</h3>
          <p>LinkedIn &bull; Instagram &bull; YouTube</p>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
