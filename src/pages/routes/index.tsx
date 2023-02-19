import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Account } from '../account';
import { Profile } from '../profile';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/user/account" element={<Account />} />
      <Route path="/*" element={<Navigate replace to="/user/profile" />} />
    </Routes>
  );
};
