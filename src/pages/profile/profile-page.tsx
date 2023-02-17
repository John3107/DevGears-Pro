import React from 'react';
import { useStore } from 'effector-react';
import { valueChanged, $profile } from '../../entities/profile';

export const Profile: React.FC = () => {
  const profile = useStore($profile);
  return (
    <div>
      <input onChange={(e) => valueChanged(e.currentTarget.value)} />
      <span>{profile.value}</span>
    </div>
  );
};
