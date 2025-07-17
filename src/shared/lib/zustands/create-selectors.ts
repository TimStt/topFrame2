import { StoreApi, UseBoundStore } from 'zustand';
import { shallow } from 'zustand/shallow';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    ((store.use as { [k: string]: () => unknown })[k] = () =>
      store((s) => s[k as keyof typeof s])),
      shallow;
  }

  return store;
};
