import React from 'react';
import 'antd/dist/reset.css';
import './styles/App.less';

import Routes from './routes'

const App = () => (
  <div className="app-wrapper">
    <Routes />
  </div>
);

export default App;