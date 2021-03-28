import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRouterSwitch from './AppRouterSwitch';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <AppRouterSwitch />
    </Router>
  );
};

export default AppRouter;
