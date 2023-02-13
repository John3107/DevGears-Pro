import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './account';
import Profile from './profile';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<Account />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
