import React from 'react';
import { useStore } from 'effector-react';
import { setProf, $profile } from '../../entities/model';

const Profile = () => {
  const profile = useStore($profile);
  return (
    <div>
      <input onChange={(e) => setProf(e.currentTarget.value)} />
      <span>{profile.value}</span>
    </div>
  );
};

export default Profile;
