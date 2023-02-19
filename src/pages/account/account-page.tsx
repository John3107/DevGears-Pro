import React, { useState } from 'react';
import './index.scss';
import avatar from '../../shared/ui/assets/images/avatar.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import TextField from '@mui/material/TextField';
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
} from '../../entities/account';

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

  return (
    <Box>
      <Paper className="account">
        <div className="avatar">
          <img src={avatar} className="avatar__item" />
        </div>
        <div className="individual">
          <div className="subdevision">
            <div className="subdevision__title">
              <span>First Name</span>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, name: !isEdit.name })}
                fontSize="small"
                className="subdevision__title_icon"
              />
            </div>
            {isEdit.name ? (
              <TextField
                className="subdevision__textfield"
                autoFocus={true}
                onChange={(e) => userNameChanged(e.currentTarget.value)}
                value={name}
              />
            ) : (
              <span className="subdevision__item">{name}</span>
            )}
          </div>
          <div className="subdevision">
            <div className="subdevision__title">
              <span>Last Name</span>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, surname: !isEdit.surname })}
                fontSize="small"
                className="subdevision__title_icon"
              />
            </div>
            {isEdit.surname ? (
              <TextField
                className="subdevision__textfield"
                autoFocus={true}
                onChange={(e) => userSurnameChanged(e.currentTarget.value)}
                value={surname}
              />
            ) : (
              <span className="subdevision__item">{surname}</span>
            )}
          </div>
        </div>
        <div className="contacts">
          <div className="subdevision">
            <div className="subdevision__title">
              <span>Address</span>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, address: !isEdit.address })}
                fontSize="small"
                className="subdevision__title_icon"
              />
            </div>
            {isEdit.address ? (
              <TextField
                className="subdevision__textfield"
                autoFocus={true}
                onChange={(e) => userAddressChanged(e.currentTarget.value)}
                value={address}
              />
            ) : (
              <span className="subdevision__item">{address}</span>
            )}
          </div>
          <div className="subdevision">
            <div className="subdevision__title">
              <span>Email</span>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, email: !isEdit.email })}
                fontSize="small"
                className="subdevision__title_icon"
              />
            </div>
            {isEdit.email ? (
              <TextField
                className="subdevision__textfield"
                autoFocus={true}
                onChange={(e) => userEmailChanged(e.currentTarget.value)}
                value={email}
              />
            ) : (
              <span className="subdevision__item">{email}</span>
            )}
          </div>
          <div className="subdevision">
            <div className="subdevision__title">
              <span>Phone</span>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, phone: !isEdit.phone })}
                fontSize="small"
                className="subdevision__title_icon"
              />
            </div>
            {isEdit.phone ? (
              <TextField
                className="subdevision__textfield"
                autoFocus={true}
                onChange={(e) => userPhoneChanged(e.currentTarget.value)}
                value={phone}
              />
            ) : (
              <span className="subdevision__item">{phone}</span>
            )}
          </div>
        </div>
        <div className="individual">
          <div className="subdevision">
            <div className="subdevision__title">
              <span>Password</span>
              <DriveFileRenameOutlineOutlinedIcon
                onClick={() => setIsEdit({ ...isEdit, password: !isEdit.password })}
                fontSize="small"
                className="subdevision__title_icon"
              />
            </div>
            {isEdit.password ? (
              <TextField
                className="subdevision__textfield"
                autoFocus={true}
                onChange={(e) => userPasswordChanged(e.currentTarget.value)}
                value={password}
              />
            ) : (
              <span className="subdevision__item">{password}</span>
            )}
          </div>
          {isEdit.password && (
            <div className="subdevision">
              <div className="subdevision__title">
                <span>Confirm password</span>
              </div>
              <TextField
                className="subdevision__textfield"
                onChange={(e) => userConfirmPasswordChanged(e.currentTarget.value)}
                value={confirmPassword}
              />
            </div>
          )}
        </div>
      </Paper>
    </Box>
  );
};
