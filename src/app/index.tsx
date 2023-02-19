import React from 'react';
import { Routing } from './../pages/routes';
import './index.scss';
import { Header } from './header/index';
import { Sidebar } from './sidebar/index';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="root">
        <Header />
        <Sidebar />
      </div>
      <div className="main">
        <Routing />
      </div>
    </div>
  );
};
