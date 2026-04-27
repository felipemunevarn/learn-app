import { useSearchParams } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') === 'trainer' ? 'trainer' : 'student';

  const handleRegistration = async (formData) => {
    // TODO: replace with real API call
    // const response = await fetch('/api/auth/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // if (!response.ok) throw new Error('Registration failed');
    // return await response.json();
    console.log('Register attempt:', formData);
    return { username: 'new_user_123', password: 'TempPass456!' };
  };

  return <RegistrationForm role={role} onSubmit={handleRegistration} />;
};

export default Registration;
