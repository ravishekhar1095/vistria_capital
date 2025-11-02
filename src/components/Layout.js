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

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="vistria-app">
      <header className="top-nav">
        <div className="brand">
          <span className="brand-mark">Vistria</span>
          <span className="brand-name">Capital</span>
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
          <div className="footer-map">
            <iframe
              title="Nirvana Courtyard Sector 50 Gurgaon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.362014949481!2d77.05320457603651!3d28.61873997566559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2276b8dcf2bf%3A0x147002f98ddc9eb5!2sNirvana%20Courtyard%2C%20Sector%2050%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="footer-info">
            <h3>Visit Vistria Capital</h3>
            <p>
              Nirvana Courtyard, Sector 50<br />
              Gurugram, Haryana 122018, India
            </p>
            <div className="footer-contact">
              <span>+91 9560700707</span>
              <span>info@vistriacapital.com</span>
            </div>
            <p className="footer-note">© 2025 Vistria Capital</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
