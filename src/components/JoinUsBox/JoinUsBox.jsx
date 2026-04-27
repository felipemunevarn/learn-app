import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './JoinUsBox.module.css';

/**
 * JoinUsBox
 * Props:
 *  - role: 'trainer' | 'student'
 *  - description: string (optional override)
 *  - imageSrc: string (optional)
 */
const JoinUsBox = ({
  role = 'student',
  description = 'Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.',
  imageSrc,
}) => {
  const navigate = useNavigate();
  const label = role === 'trainer' ? 'Trainer' : 'Student';

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h3 className={styles.title}>Register as {label}</h3>
        <p className={styles.description}>{description}</p>
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate(`/registration?role=${role}`)}
        >
          Join us
        </Button>
      </div>
      <div className={styles.imageWrap}>
        {imageSrc ? (
          <img src={imageSrc} alt={`Register as ${label}`} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
      </div>
    </div>
  );
};

export default JoinUsBox;
