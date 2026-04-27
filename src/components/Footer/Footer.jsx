import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Footer.module.css';

const NAV_COLS = [
  {
    title: 'Product',
    links: [{ label: 'Features', to: '/home' }, { label: 'Pricing', to: '/home' }],
  },
  {
    title: 'Resources',
    links: [{ label: 'Blog', to: '/home' }, { label: 'User guides', to: '/home' }, { label: 'Webinars', to: '/home' }],
  },
  {
    title: 'Company',
    links: [{ label: 'About us', to: '/home' }, { label: 'Contacts us', to: '/home' }],
  },
];

const LANGUAGES = ['English', 'Español', 'Français', 'Deutsch', 'Português'];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Logo */}
          <Link to="/home" className={styles.logo}>
            <span>◎</span>learn
          </Link>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              {col.links.map(({ label, to }) => (
                <Link key={label} to={to} className={styles.colLink}>{label}</Link>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <p className={styles.newsletterTitle}>Subscribe to our newsletter</p>
            <p className={styles.newsletterSub}>For product announcements and exclusive insights</p>
            {subscribed ? (
              <p className={styles.subscribed}>✓ Thanks for subscribing!</p>
            ) : (
              <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className={styles.emailInput}
                  placeholder="Input your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  required
                />
                <Button type="submit" variant="primary" size="sm">Subscribe</Button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          {/* Language selector */}
          <select
            className={styles.langSelect}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Select language"
          >
            {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>

          <p className={styles.copy}>© 2024 Learn, Inc. · <Link to="/home" className={styles.policyLink}>Privacy</Link> · <Link to="/home" className={styles.policyLink}>Terms</Link></p>

          {/* Social icons */}
          <div className={styles.socials} aria-label="Social links">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
