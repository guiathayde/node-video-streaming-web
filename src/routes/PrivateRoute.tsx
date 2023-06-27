import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

export function PrivateRoute() {
  const { isLogged } = useAuth();

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}
