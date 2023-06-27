import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';

interface AuthContextData {
  isLogged: boolean;
  login: (newToken: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(() => {
    const status = localStorage.getItem('@guiathayde-video');

    if (status === null || status === '') return false;

    return true;
  });

  const login = useCallback(
    async (password: string) => {
      if (password.length > 2) {
        const response = await api.post('/login', { password });

        localStorage.setItem('@guiathayde-video', 'connected');
        setIsLogged(response.status === 200);

        navigate('/');
      }
    },
    [navigate]
  );

  const logout = useCallback(async () => {
    const response = await api.post('/logout');

    if (response.status === 200) {
      localStorage.setItem('@guiathayde-video', '');
      setIsLogged(false);

      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    api
      .post('/checkSession')
      .then((response) => {
        localStorage.setItem('@guiathayde-video', 'connected');
        setIsLogged(response.status === 200);
      })
      .catch((error) => {
        console.error(error);
        localStorage.setItem('@guiathayde-video', '');
        setIsLogged(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
