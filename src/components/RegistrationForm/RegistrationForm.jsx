import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './RegistrationForm.module.css';

const SPECIALIZATIONS = ['JavaScript', 'Python', 'Java', 'PHP', 'CSS', 'Algorithms', 'DevOps', 'Mobile'];

const RegistrationForm = ({ role = 'student', onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    specialization: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (role === 'trainer' && !formData.specialization)
      newErrors.specialization = 'Specialization is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const response = onSubmit ? await onSubmit({ ...formData, role }) : null;
      setResult(response || { username: 'user_demo', password: 'Pass1234!' });
    } catch (err) {
      setErrors({ server: err.message || 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <div className={styles.successCard}>
        <h2 className={styles.successTitle}>Registration Successful! 🎉</h2>
        <p className={styles.successText}>Your account has been created. Save your credentials:</p>
        <div className={styles.credentials}>
          <div className={styles.credRow}>
            <span className={styles.credLabel}>Username</span>
            <span className={styles.credValue}>{result.username}</span>
          </div>
          <div className={styles.credRow}>
            <span className={styles.credLabel}>Password</span>
            <span className={styles.credValue}>{result.password}</span>
          </div>
        </div>
        <Button variant="primary" onClick={() => navigate('/login')}>Proceed to Sign In</Button>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageCol}>
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        </div>
        <div className={styles.formCol}>
          <h2 className={styles.title}>Registration</h2>
          <p className={styles.roleTag}>{role === 'trainer' ? 'Trainer' : 'Student'}</p>

          {errors.server && (
            <div className={styles.serverError} role="alert">{errors.server}</div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="firstName">First name</label>
              <input
                id="firstName" name="firstName" type="text"
                className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                placeholder="First name" value={formData.firstName} onChange={handleChange}
              />
              {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="lastName">Last name</label>
              <input
                id="lastName" name="lastName" type="text"
                className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                placeholder="Last name" value={formData.lastName} onChange={handleChange}
              />
              {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
            </div>

            {role === 'student' && (
              <>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="dateOfBirth">Date of Birth <span className={styles.optional}>(optional)</span></label>
                  <input
                    id="dateOfBirth" name="dateOfBirth" type="date"
                    className={styles.input} value={formData.dateOfBirth} onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="address">Address <span className={styles.optional}>(optional)</span></label>
                  <input
                    id="address" name="address" type="text"
                    className={styles.input} placeholder="Address"
                    value={formData.address} onChange={handleChange}
                  />
                </div>
              </>
            )}

            {role === 'trainer' && (
              <div className={styles.field}>
                <label className={styles.label} htmlFor="specialization">Specialization</label>
                <select
                  id="specialization" name="specialization"
                  className={`${styles.input} ${errors.specialization ? styles.inputError : ''}`}
                  value={formData.specialization} onChange={handleChange}
                >
                  <option value="">Please select</option>
                  {SPECIALIZATIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.specialization && <span className={styles.error}>{errors.specialization}</span>}
              </div>
            )}

            <Button type="submit" variant="primary" size="md" loading={loading} className={styles.submitBtn}>
              Submit
            </Button>
          </form>

          <p className={styles.signinText}>
            Already have an account? <Link to="/login" className={styles.link}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
