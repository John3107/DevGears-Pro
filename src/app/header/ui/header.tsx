import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    position: 'relative',
    backgroundColor: '#1890ff',
    height: '60px',
    padding: '0 30px',
    color: '#fff',
    fontSize: '24px',
    fontSeight: '400',
  },
});

export const Header: React.FC = () => {
  const { header } = useStyles();
  return <Box className={header}>Ivan Yeremenko</Box>;
};
