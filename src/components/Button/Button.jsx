import styles from './Button.module.css';

/**
 * Reusable Button component
 * Props:
 *  - variant: 'primary' | 'secondary' | 'important' | 'danger'
 *  - size: 'sm' | 'md' | 'lg'
 *  - icon: JSX element (optional)
 *  - disabled: boolean
 *  - loading: boolean
 *  - onClick: function
 *  - type: 'button' | 'submit' | 'reset'
 *  - children: button label
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  children,
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${loading ? styles.loading : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {icon && !loading && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
