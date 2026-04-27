import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button/Button';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/home', label: 'Blog' },
  { to: '/home', label: 'Pricing' },
  { to: '/home', label: 'About Us' },
];

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/home');
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Mobile: three-dots toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
        >
          ···
        </button>

        {/* Logo */}
        <Link to="/home" className={styles.logo}>
          <span className={styles.logoIcon}>◎</span>learn
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Auth actions */}
        <div className={styles.actions}>
          {isAuthenticated ? (
            <Button variant="secondary" size="sm" onClick={handleLogout}>Sign out</Button>
          ) : (
            <>
              <Button variant="secondary" size="sm" onClick={() => navigate('/login')}>Sign in</Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/join-us')}>Join us</Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} role="dialog" aria-label="Mobile navigation">
        <div className={styles.drawerHeader}>
          <div className={styles.drawerProfile}>
            <div className={styles.avatar} aria-hidden="true">👤</div>
            <div>
              <p className={styles.drawerUsername}>{isAuthenticated ? 'User' : 'Guest'}</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close navigation">✕</button>
        </div>

        <nav className={styles.drawerNav}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <NavLink
              to="/my-account"
              className={({ isActive }) => `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              My Account
            </NavLink>
          )}
        </nav>

        {isAuthenticated ? (
          <button className={styles.drawerSignOut} onClick={handleLogout}>Sign out</button>
        ) : (
          <div className={styles.drawerActions}>
            <Button variant="secondary" size="sm" onClick={() => { navigate('/login'); setMenuOpen(false); }}>Sign in</Button>
            <Button variant="primary" size="sm" onClick={() => { navigate('/join-us'); setMenuOpen(false); }}>Join us</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
