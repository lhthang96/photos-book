import React from 'react';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'antd/dist/antd.css';

import { AppRoutes } from './routes';
import { useInitApp } from './hooks';

const App: React.FC = () => {
  useInitApp();

  return <AppRoutes />;
};

export default App;
