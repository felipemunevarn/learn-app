import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
