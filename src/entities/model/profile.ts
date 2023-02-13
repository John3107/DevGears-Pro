import { createStore, createEvent } from 'effector';

type Store = {
  value: string;
};
export const setProf = createEvent<string>();

export const $profile = createStore<Store>({
  value: '',
}).on(setProf, (state, value) => ({ ...state, value }));
