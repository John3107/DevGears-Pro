import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sidebar: {
    width: '150px',
    height: '100%',
    borderRight: 'solid 1px #E5E5E5',
    padding: '30px',
  },
  routerLink: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '17px',
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    color: '#656565',
    margin: '19px 0',
    ' & hover': {
      textDecoration: 'underline',
    },
  },
  active: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '17px',
    color: '#171616',
  },
});

export const Sidebar: React.FC = () => {
  const [isActiveLink, setIsActiveLink] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { sidebar, routerLink, active } = useStyles();

  useEffect(() => {
    const pathnameSplitted = location.pathname.split('/');
    if (pathnameSplitted[pathnameSplitted.length - 1] === 'profile') {
      setIsActiveLink(false);
    } else {
      setIsActiveLink(true);
    }
  }, [location]);

  return (
    <Box className={sidebar}>
      <Box
        className={`${routerLink} ${!isActiveLink && active}`}
        onClick={() => navigate('user/profile')}
      >
        Profile
      </Box>
      <Box
        className={`${routerLink} ${isActiveLink && active}`}
        onClick={() => navigate('user/account')}
      >
        Account
      </Box>
    </Box>
  );
};
