import React from 'react';
import { useStore } from 'effector-react';
import { valueChanged, $account } from '../../entities/account';

export const Account: React.FC = () => {
  const account = useStore($account);
  return (
    <div>
      <input onChange={(e) => valueChanged(e.currentTarget.value)} />
      <span>{account.value}</span>
    </div>
  );
};
