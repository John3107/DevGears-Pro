import { createStore, createEvent } from 'effector';

type InitialStateType = {
  value: string;
};
export const valueChanged = createEvent<string>();

export const $account = createStore<InitialStateType>({
  value: '',
}).on(valueChanged, (state, value) => ({ ...state, value }));
