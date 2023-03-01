import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Profile } from 'pages/profile';
import { paths } from 'shared/config';

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.profile.root} element={<Profile />} />
      <Route path={paths.root} element={<Navigate replace to={paths.profile.root} />} />
    </Routes>
  );
};
