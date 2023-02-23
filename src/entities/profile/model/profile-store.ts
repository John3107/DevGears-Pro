import { createStore, createEvent } from 'effector';

type ProfilePageStateType = {
  value: string;
};
export const valueChanged = createEvent<string>();

export const $profile = createStore<ProfilePageStateType>({
  value: '',
}).on(valueChanged, (state, value) => ({ ...state, value }));
