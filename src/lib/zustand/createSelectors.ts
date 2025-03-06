import { StoreApi, UseBoundStore } from "zustand";

/**
 * Store with selectors
 * @template S is a defined store
 * @template SA is state and actions of the store
 * @template WithSelectors is a store with selectors
 */
type WithSelectors<
  S extends UseBoundStore<StoreApi<SA>>,
  SA extends object = ReturnType<S["getState"]>
> = S & {
  use: { [K in keyof SA]: () => SA[K] };
};

/**
 * Create selectors for a store
 * @param store Store to create selectors for
 * @returns Store with selectors @see WithSelectors
 */
export default function createSelectors<
  S extends UseBoundStore<StoreApi<SA>>,
  SA extends object = ReturnType<S["getState"]>
>(_store: S): WithSelectors<S, SA> {
  const store = _store as WithSelectors<S, SA>;

  store.use = {} as WithSelectors<S, SA>["use"];

  Object.keys(store.getState() as object).forEach((key) => {
    const typedKey = key as keyof SA;
    store.use[typedKey] = () => store((s) => s[typedKey]);
  });

  return store;
}
