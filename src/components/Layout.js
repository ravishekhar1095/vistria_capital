import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const navLinks = [
  { path: '/', label: 'Home', end: true },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/insights', label: 'Insights' },
  { path: '/media-news', label: 'Media & news' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/about', label: 'About us' },
  { path: '/contact', label: 'Contact us', accent: true },
];

const footerNav = [
  {
    title: 'Company',
    links: [
      { path: '/about', label: 'About us' },
      { path: '/projects', label: 'Our portfolio' },
      { path: '/media-news', label: 'Media & news' },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { path: '/services', label: 'Advisory services' },
      { path: '/insights', label: 'Investment insights' },
      { path: '/blogs', label: 'Blogs & research' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { path: '/contact', label: 'Contact us' },
      { path: '/services', label: 'Partner with us' },
      { path: '/projects', label: 'Case studies' },
    ],
  },
];

const footerSocial = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vistria-capital/',
    icon: 'https://img.icons8.com/color/48/linkedin.png',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: 'https://img.icons8.com/color/48/twitter--v1.png',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: 'https://img.icons8.com/color/48/youtube-play.png',
  },
];

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="vistria-app">
      <header className="top-nav">
        <div className="brand" aria-label="Vistria Capital">
          <img
            className="brand-logo"
            src="/logo-footer.png"
            alt="Vistria Capital logo"
            decoding="async"
          />
        </div>
        <nav>
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                [
                  item.accent ? 'primary-link' : '',
                  isActive ? 'active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand" aria-label="Vistria Capital">
                <img
                  className="brand-logo brand-logo--footer"
                  src="/logo-footer.png"
                  alt="Vistria Capital logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p>
                Blending institutional rigor with entrepreneurial agility to build resilient, future ready
                ventures across India&apos;s high growth sectors.
              </p>
            <div className="footer-social">
              {footerSocial.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <img src={link.icon} alt={`${link.label} icon`} loading="lazy" />
                </a>
              ))}
            </div>
            </div>
            <div className="footer-links">
              {footerNav.map((section) => (
                <div key={section.title} className="footer-links-column">
                  <p className="footer-links-title">{section.title}</p>
                  <div className="footer-links-list">
                    {section.links.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => ['footer-link', isActive ? 'active' : ''].filter(Boolean).join(' ')}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="footer-visit">
              <h3>Visit Vistria Capital</h3>
              <p>
                Nirvana Courtyard, Sector 50<br />
                Gurugram, Haryana 122018, India
              </p>
              <div className="footer-contact">
                <span>+91 9560700707</span>
                <span>info@vistriacapital.com</span>
              </div>
              <NavLink to="/contact" className="footer-cta">
                Schedule a consultation
              </NavLink>
            </div>
          </div>
          <div className="footer-map">
            <iframe
              title="Nirvana Courtyard Sector 50 Gurgaon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.362014949481!2d77.05320457603651!3d28.61873997566559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2276b8dcf2bf%3A0x147002f98ddc9eb5!2sNirvana%20Courtyard%2C%20Sector%2050%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Vistria Capital. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy policy</a>
            <a href="#terms">Terms of use</a>
            <a href="#ethics">Code of ethics</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
