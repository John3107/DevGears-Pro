import { createStore, createEvent } from 'effector';

type UserDataType = {
  name: string;
};
export const nameChanged = createEvent<string>();

export const $userData = createStore<UserDataType>({
  name: '',
}).on(nameChanged, (state, value) => ({ ...state, value }));
