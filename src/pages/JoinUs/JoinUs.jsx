import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import JoinUsBox from '../../components/JoinUsBox/JoinUsBox';
import styles from './JoinUs.module.css';

const JoinUs = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Join Us</h1>
      <p className={styles.subtitle}>Choose how you want to join our learning platform</p>
      <div className={styles.boxes}>
        <JoinUsBox role="trainer" />
        <JoinUsBox role="student" />
      </div>
    </div>
  );
};

export default JoinUs;
