import React from 'react';
// import { useStore } from 'effector-react';
// import { name, $profile } from '../../entities/profile';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './index.scss';
import avatar from '../../shared/ui/assets/images/avatar.png';

export const Profile: React.FC = () => {
  // const { name } = useStore($profile);

  return (
    <Box>
      <Paper className="profile">
        <div className="avatar">
          <img src={avatar} className="avatar__item" />
        </div>
        <div className="individual">
          <div className="subdevision">
            <span className="subdevision_title">First Name</span>
            <span className="subdevision_item">Ivan</span>
          </div>
          <div className="subdevision">
            <span className="subdevision_title">Last Name</span>
            <span className="subdevision_item">Yeremenko</span>
          </div>
        </div>
        <div className="contacts">
          <div className="subdevision">
            <span className="subdevision_title">Address</span>
            <span className="subdevision_item">Kyiv, Shevchenko 1</span>
          </div>
          <div className="subdevision">
            <span className="subdevision_title">Email</span>
            <span className="subdevision_item">email@gmail.com</span>
          </div>
          <div className="subdevision">
            <span className="subdevision_title">Phone</span>
            <span className="subdevision_item">0631111111</span>
          </div>
        </div>
      </Paper>
    </Box>
  );
};
