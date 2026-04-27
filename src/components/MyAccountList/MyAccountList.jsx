import { useState } from 'react';
import Button from '../Button/Button';
import styles from './MyAccountList.module.css';

const MyAccountList = ({ user, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    userName: user?.userName || '',
    dateOfBirth: user?.dateOfBirth || '',
    address: user?.address || '',
    email: user?.email || '',
    active: user?.active ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      if (onUpdate) await onUpdate(formData);
      setEditMode(false);
    } catch (err) {
      setErrors({ server: err.message || 'Update failed' });
    } finally {
      setLoading(false);
    }
  };

  if (!editMode) {
    return (
      <div className={styles.profileView}>
        <h2 className={styles.pageTitle}>My profile</h2>
        <div className={styles.avatarRow}>
          <div className={styles.avatar} aria-label="Profile photo">👤</div>
          <div className={styles.statusWrap}>
            <p className={styles.statusLabel}>Status</p>
            <span className={`${styles.status} ${formData.active ? styles.active : styles.inactive}`}>
              {formData.active ? '✓ Active' : '○ Inactive'}
            </span>
          </div>
        </div>

        {[
          ['First Name', formData.firstName],
          ['Last Name', formData.lastName],
          ['User Name', formData.userName],
          ['Date of birth', formData.dateOfBirth],
          ['Address', formData.address],
          ['Email', formData.email],
        ].map(([label, value]) => (
          <div key={label} className={styles.profileRow}>
            <span className={styles.profileLabel}>{label}</span>
            <span className={styles.profileValue}>{value || '—'}</span>
          </div>
        ))}

        <div className={styles.actions}>
          <Button variant="primary" size="sm" onClick={() => setEditMode(true)}>Edit profile</Button>
          <Button variant="secondary" size="sm" onClick={() => {}}>Change password</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.editView}>
      <h2 className={styles.pageTitle}>Edit profile</h2>

      {errors.server && <div className={styles.serverError}>{errors.server}</div>}

      <div className={styles.photoSection}>
        <div className={styles.avatarLarge} aria-label="Profile photo">👤</div>
        <div>
          <p className={styles.photoLabel}>Upload your photo</p>
          <p className={styles.photoHint}>Your photo should be in PNG or JPG format</p>
          <div className={styles.photoActions}>
            <Button variant="secondary" size="sm">Choose image</Button>
            <button className={styles.removeBtn} type="button">Remove</button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave}>
        {[
          { name: 'firstName', label: 'First name', placeholder: 'Marta' },
          { name: 'lastName', label: 'Last name', placeholder: 'Black' },
          { name: 'userName', label: 'User name', placeholder: 'Marta_st' },
          { name: 'dateOfBirth', label: 'Date of birth', placeholder: '01.01.2001', type: 'date' },
          { name: 'address', label: 'Address', placeholder: '123 Main Street' },
          { name: 'email', label: 'Email', placeholder: 'email@example.com', type: 'email' },
        ].map(({ name, label, placeholder, type = 'text' }) => (
          <div key={name} className={styles.field}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input
              id={name} name={name} type={type}
              className={`${styles.input} ${errors[name] ? styles.inputError : ''}`}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
            />
            {errors[name] && <span className={styles.error}>{errors[name]}</span>}
          </div>
        ))}

        <div className={styles.field}>
          <label className={styles.toggleLabel}>
            Active
            <input
              type="checkbox" name="active"
              checked={formData.active} onChange={handleChange}
              className={styles.toggleInput}
            />
            <span className={`${styles.toggle} ${formData.active ? styles.toggleOn : ''}`} aria-hidden="true" />
          </label>
        </div>

        <div className={styles.formActions}>
          <Button variant="secondary" size="sm" type="button" onClick={() => setEditMode(false)}>Cancel</Button>
          <Button variant="primary" size="sm" type="submit" loading={loading}>Save changes</Button>
        </div>
      </form>
    </div>
  );
};

export default MyAccountList;
