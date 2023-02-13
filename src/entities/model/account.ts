import { createStore, createEvent } from 'effector';

type Store = {
  value: string;
};
export const setAcc = createEvent<string>();

export const $account = createStore<Store>({
  value: '',
}).on(setAcc, (state, value) => ({ ...state, value }));
