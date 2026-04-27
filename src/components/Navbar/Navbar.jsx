import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const publicLinks = [
  { to: '/home', label: 'Home' },
  { to: '/join-us', label: 'Join Us' },
];

const authLinks = [
  { to: '/my-account', label: 'My Account' },
  { to: '/training', label: 'Training' },
  { to: '/change-password', label: 'Change Password' },
];

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <NavLink to="/home">LearnApp</NavLink>
      </div>

      <ul className={styles.links}>
        {publicLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              {label}
            </NavLink>
          </li>
        ))}

        {isAuthenticated &&
          authLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? styles.active : undefined}
              >
                {label}
              </NavLink>
            </li>
          ))}
      </ul>

      <div className={styles.authActions}>
        {isAuthenticated ? (
          <button onClick={handleLogout} className={styles.btn}>
            Log Out
          </button>
        ) : (
          <NavLink to="/login" className={styles.btn}>
            Log In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
