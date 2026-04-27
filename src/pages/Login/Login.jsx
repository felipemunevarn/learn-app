import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  const handleLogin = async ({ username, password }) => {
    // TODO: replace with real API call
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password }),
    // });
    // if (!response.ok) throw new Error('Invalid credentials');
    // const { token } = await response.json();
    // localStorage.setItem('auth_token', token);
    console.log('Login attempt:', { username });
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default Login;
