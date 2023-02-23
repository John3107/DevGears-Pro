import React from 'react';
// import { useStore } from 'effector-react';
// import { name, $profile } from '../../entities/profile';
import { Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import avatarIcon from 'shared/ui/assets/images/avatar.png';

const useStyles = makeStyles({
  profile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween',
    alignItems: 'flexStart',
    padding: '24px 66px',
    boxSizing: 'border-box',
    gap: '16px',
  },
  avatar: {
    display: 'inherit',
    justifyContent: 'center',
    width: '100%',
  },
  avatarItem: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },
  individual: {
    display: 'inherit',
    justifyContent: 'spaceBetween',
    width: '100%',
    gap: '33.3%',
    borderBottom: '1px solid #E5E5E5',
  },
  contacts: {
    display: 'inherit',
    justifyContent: 'spaceBetween',
    width: '100%',
    borderBottom: '1px solid #E5E5E5',
  },
  subdevision: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    margin: '24px 0',
    width: '100%',
  },
  subdevisionTitle: {
    display: 'inherit',
    alignItems: 'center',
    gap: '8px',
    color: '#656565',
  },
  item: {
    height: '24px',
    fontWeight: '600',
    fontSize: '18px',
  },
});

export const Profile: React.FC = () => {
  // const { name } = useStore($profile);
  const { profile, avatar, avatarItem, individual, contacts, subdevision, item, subdevisionTitle } =
    useStyles();
  return (
    <Box>
      <Paper className={profile}>
        <Box className={avatar}>
          <img src={avatarIcon} className={avatarItem} />
        </Box>
        <Box className={individual}>
          <Box className={subdevision}>
            <Box component="span" className={subdevisionTitle}>
              First Name
            </Box>
            <Box component="span" className={item}>
              Ivan
            </Box>
          </Box>
          <Box className={subdevision}>
            <Box component="span" className={subdevisionTitle}>
              Last Name
            </Box>
            <Box component="span" className={item}>
              Yeremenko
            </Box>
          </Box>
        </Box>
        <Box className={contacts}>
          <Box className={subdevision}>
            <Box component="span" className={subdevisionTitle}>
              Address
            </Box>
            <Box component="span" className={item}>
              Kyiv, Shevchenko 1
            </Box>
          </Box>
          <Box className={subdevision}>
            <Box component="span" className={subdevisionTitle}>
              Email
            </Box>
            <Box component="span" className={item}>
              email@gmail.com
            </Box>
          </Box>
          <Box className={subdevision}>
            <Box component="span" className={subdevisionTitle}>
              Phone
            </Box>
            <Box component="span" className={item}>
              0631111111
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
