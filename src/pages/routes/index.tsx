import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Account } from '../account';
import { Profile } from '../profile';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Profile />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};
