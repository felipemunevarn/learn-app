import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import RegistrationVerification from '../pages/RegistrationVerification/RegistrationVerification';
import MyAccount from '../pages/MyAccount/MyAccount';
import Training from '../pages/Training/Training';
import JoinUs from '../pages/JoinUs/JoinUs';
import ChangePassword from '../pages/ChangePassword/ChangePassword';
import NotFound from '../pages/NotFound/NotFound';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="registration" element={<Registration />} />
          <Route path="registration-verification" element={<RegistrationVerification />} />

          {/* Protected - require login */}
          <Route element={<ProtectedRoute />}>
            <Route path="my-account" element={<MyAccount />} />
            <Route path="training" element={<Training />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
