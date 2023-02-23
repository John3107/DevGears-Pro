import React, { useState } from 'react';
import avatarIcon from 'shared/ui/assets/images/avatar.png';
import { Box, Paper, TextField, InputLabel } from '@mui/material';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { makeStyles } from '@mui/styles';
import { useStore } from 'effector-react';
import {
  userNameChanged,
  userSurnameChanged,
  userAddressChanged,
  userEmailChanged,
  userPhoneChanged,
  userPasswordChanged,
  userConfirmPasswordChanged,
  $account,
} from 'entities/account';

const useStyles = makeStyles({
  account: {
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
  editIcon: {
    cursor: 'pointer',
  },
  item: {
    height: '24px',
    fontWeight: '600',
    fontSize: '18px',
  },
  textfield: {
    '& input': {
      height: '16px',
      padding: '4px 14px',
    },
  },
});

export const Account: React.FC = () => {
  const { name, surname, address, email, phone, password, confirmPassword } = useStore($account);
  const [isEdit, setIsEdit] = useState({
    name: false,
    surname: false,
    address: false,
    email: false,
    phone: false,
    password: false,
  });
  const {
    account,
    avatar,
    avatarItem,
    individual,
    contacts,
    subdevision,
    item,
    textfield,
    subdevisionTitle,
    editIcon,
  } = useStyles();

  return (
    <form>
      <Paper className={account}>
        <Box className={avatar}>
          <img src={avatarIcon} className={avatarItem} />
        </Box>
        <Box className={individual}>
          <Box className={subdevision}>
            <Box className={subdevisionTitle}>
              <InputLabel htmlFor="last-name">First Name</InputLabel>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, name: !isEdit.name })}
                fontSize="small"
                className={editIcon}
              />
            </Box>
            {isEdit.name ? (
              <TextField
                className={textfield}
                id="last-name"
                autoFocus={true}
                onChange={(e) => userNameChanged(e.currentTarget.value)}
                value={name}
              />
            ) : (
              <Box component="span" className={item}>
                {name}
              </Box>
            )}
          </Box>
          <Box className={subdevision}>
            <Box className={subdevisionTitle}>
              <InputLabel htmlFor="last-name">Last Name</InputLabel>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, surname: !isEdit.surname })}
                fontSize="small"
                className={editIcon}
              />
            </Box>
            {isEdit.surname ? (
              <TextField
                className={textfield}
                id="last-name"
                autoFocus={true}
                onChange={(e) => userSurnameChanged(e.currentTarget.value)}
                value={surname}
              />
            ) : (
              <Box component="span" className={item}>
                {surname}
              </Box>
            )}
          </Box>
        </Box>
        <Box className={contacts}>
          <Box className={subdevision}>
            <Box className={subdevisionTitle}>
              <InputLabel htmlFor="address">Address</InputLabel>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, address: !isEdit.address })}
                fontSize="small"
                className={editIcon}
              />
            </Box>
            {isEdit.address ? (
              <TextField
                className={textfield}
                autoFocus={true}
                id="address"
                onChange={(e) => userAddressChanged(e.currentTarget.value)}
                value={address}
              />
            ) : (
              <Box component="span" className={item}>
                {address}
              </Box>
            )}
          </Box>
          <Box className={subdevision}>
            <Box className={subdevisionTitle}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, email: !isEdit.email })}
                fontSize="small"
                className={editIcon}
              />
            </Box>
            {isEdit.email ? (
              <TextField
                className={textfield}
                id="email"
                autoFocus={true}
                onChange={(e) => userEmailChanged(e.currentTarget.value)}
                value={email}
              />
            ) : (
              <Box component="span" className={item}>
                {email}
              </Box>
            )}
          </Box>
          <Box className={subdevision}>
            <Box className={subdevisionTitle}>
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, phone: !isEdit.phone })}
                fontSize="small"
                className={editIcon}
              />
            </Box>
            {isEdit.phone ? (
              <TextField
                className={textfield}
                id="phone"
                autoFocus={true}
                onChange={(e) => userPhoneChanged(e.currentTarget.value)}
                value={phone}
              />
            ) : (
              <Box component="span" className={item}>
                {phone}
              </Box>
            )}
          </Box>
        </Box>
        <Box className={individual}>
          <Box className={subdevision}>
            <Box className={subdevisionTitle}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, password: !isEdit.password })}
                fontSize="small"
                className={editIcon}
              />
            </Box>
            {isEdit.password ? (
              <TextField
                type="password"
                className={textfield}
                id="password"
                autoFocus={true}
                onChange={(e) => userPasswordChanged(e.currentTarget.value)}
                value={password}
              />
            ) : (
              <Box component="span" className={item}>
                {password.replace(/./g, '*')}
              </Box>
            )}
          </Box>
          {isEdit.password && (
            <Box className={subdevision}>
              <Box className={subdevisionTitle}>
                <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
              </Box>
              <TextField
                type="password"
                className={textfield}
                id="confirm-password"
                onChange={(e) => userConfirmPasswordChanged(e.currentTarget.value)}
                value={confirmPassword}
              />
            </Box>
          )}
        </Box>
      </Paper>
    </form>
  );
};
