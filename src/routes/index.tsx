import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Video } from '../pages/Video';

export function Routes() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      {/* <Route path="/" element={<Home />} /> */}

      <Route path="/video" element={<PrivateRoute />}>
        <Route path="/video" element={<Video />} />
      </Route>
      {/* <Route path="/video" element={<Video />} /> */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Switch>
  );
}
