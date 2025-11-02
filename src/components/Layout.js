import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const navLinks = [
  { path: '/', label: 'Home', end: true },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/insights', label: 'Insights' },
  { path: '/contact', label: 'Talk to us', accent: true },
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
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vistria Capital Advisory Pvt. Ltd. All rights reserved.</p>
        <p>Prices indicate developer quotes and are subject to due diligence and availability.</p>
      </footer>
    </div>
  );
};

export default Layout;
