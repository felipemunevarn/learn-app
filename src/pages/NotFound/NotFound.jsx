import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
    <h1 style={{ fontSize: '5rem', color: '#e94560', margin: 0 }}>404</h1>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Page not found</p>
    <Link to="/home" style={{ color: '#6c63ff' }}>← Back to Home</Link>
  </div>
);
export default NotFound;
