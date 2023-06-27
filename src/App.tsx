import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './hooks';

import { InjectAxiosInterceptors } from './pages/InjectAxiosInterceptors';

import { Routes } from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <InjectAxiosInterceptors />

        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}
