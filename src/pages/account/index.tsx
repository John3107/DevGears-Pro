import React from 'react';
import { useStore } from 'effector-react';
import { setAcc, $account } from '../../entities/model';

const Account = () => {
  const account = useStore($account);
  return (
    <div>
      <input onChange={(e) => setAcc(e.currentTarget.value)} />
      <span>{account.value}</span>
      <input onChange={(e) => setAcc(e.currentTarget.value)} />
      <span>{account.value}</span>
    </div>
  );
};

export default Account;
