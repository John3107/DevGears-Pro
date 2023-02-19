import { createStore, createEvent } from 'effector';

type InitialStateType = {
  name: string;
  surname: string;
  address: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};
export const userNameChanged = createEvent<string>();
export const userSurnameChanged = createEvent<string>();
export const userAddressChanged = createEvent<string>();
export const userEmailChanged = createEvent<string>();
export const userPhoneChanged = createEvent<string>();
export const userPasswordChanged = createEvent<string>();
export const userConfirmPasswordChanged = createEvent<string>();

export const $account = createStore<InitialStateType>({
  name: '',
  surname: '',
  address: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
})
  .on(userNameChanged, (state, name) => ({ ...state, name }))
  .on(userSurnameChanged, (state, surname) => ({ ...state, surname }))
  .on(userAddressChanged, (state, address) => ({ ...state, address }))
  .on(userEmailChanged, (state, email) => ({ ...state, email }))
  .on(userPhoneChanged, (state, phone) => ({ ...state, phone }))
  .on(userPasswordChanged, (state, password) => ({ ...state, password }))
  .on(userConfirmPasswordChanged, (state, confirmPassword) => ({ ...state, confirmPassword }));
