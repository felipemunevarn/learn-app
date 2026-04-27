import MyAccountList from '../../components/MyAccountList/MyAccountList';

const MOCK_USER = {
  firstName: 'Marta',
  lastName: 'Black',
  userName: 'Marta_st',
  dateOfBirth: '2001-01-01',
  address: '123 Main Street, Boston, MA 02108, United States',
  email: 'marta_12334@gmail.com',
  active: true,
};

const MyAccount = () => {
  const handleUpdate = async (data) => {
    // TODO: replace with real API call
    console.log('Update account:', data);
  };

  return (
    <div style={{ padding: '1rem 0' }}>
      <MyAccountList user={MOCK_USER} onUpdate={handleUpdate} />
    </div>
  );
};

export default MyAccount;
