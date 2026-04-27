import styles from './Box.module.css';

/**
 * Box — content card component
 * Props:
 *  - tag: string - label above title
 *  - title: string
 *  - date: string
 *  - timeToRead: string
 *  - imageSrc: string (optional)
 *  - onClick: function (optional)
 */
const Box = ({ tag, title, date, timeToRead, imageSrc, onClick }) => {
  return (
    <article className={`${styles.box} ${onClick ? styles.clickable : ''}`} onClick={onClick}>
      <div className={styles.imageWrap}>
        {imageSrc ? (
          <img src={imageSrc} alt={title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
      </div>
      <div className={styles.body}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.meta}>
          {date && <span className={styles.date}>{date}</span>}
          {timeToRead && <span className={styles.timeToRead}>{timeToRead}</span>}
        </div>
      </div>
    </article>
  );
};

export default Box;
