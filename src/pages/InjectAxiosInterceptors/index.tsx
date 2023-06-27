import { useEffect } from 'react';

import { useAuth } from '../../hooks/auth';
import { setupInterceptors } from '../../services/api';

export function InjectAxiosInterceptors() {
  const { logout } = useAuth();

  useEffect(() => {
    setupInterceptors(logout);
  }, [logout]);

  return null;
}
