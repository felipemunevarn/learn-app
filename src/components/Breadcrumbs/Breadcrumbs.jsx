import { Link, useLocation } from 'react-router-dom';

const LABELS = {
  home: 'Home',
  login: 'Login',
  registration: 'Registration',
  'registration-verification': 'Verify Account',
  'my-account': 'My Account',
  training: 'Training',
  'join-us': 'Join Us',
  'change-password': 'Change Password',
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0 || (segments.length === 1 && segments[0] === 'home')) {
    return null;
  }

  const crumbs = [
    { label: 'Home', path: '/home', isLast: false },
    ...segments
      .filter((seg) => seg !== 'home')
      .map((seg, index, arr) => ({
        label: LABELS[seg] ?? seg,
        path: '/' + segments.slice(0, segments.indexOf(seg) + 1).join('/'),
        isLast: index === arr.length - 1,
      })),
  ];

  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: '0.82rem', marginBottom: '1rem', color: '#888' }}>
      {crumbs.map((crumb, i) => (
        <span key={crumb.path}>
          {i > 0 && <span style={{ margin: '0 0.4rem', color: '#ccc' }}>/</span>}
          {crumb.isLast ? (
            <span style={{ color: '#444', fontWeight: 500 }}>{crumb.label}</span>
          ) : (
            <Link to={crumb.path} style={{ color: '#6c63ff', textDecoration: 'none' }}>
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
