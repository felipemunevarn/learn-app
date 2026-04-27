import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Layout = () => {
  return (
    <div>
      <main style={{ padding: '1.5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumbs />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
