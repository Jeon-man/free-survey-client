import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import createSelectors from "./createSelectors";

/**
 *
 * @param storeInitializer
 * @param persistOptions
 * @returns { store, useStoreSelector }  - Store and hook to select the store's state
 * @description
 * This function creates a persisted store with no actions.
 * It returns the store and a hook to select the store's state.
 * The store is created using Zustand.
 * The hook is created using the createSelectors helper function.
 */
export default function createPersistedStore<Store extends object>(
  storeInitializer: StateCreator<Store, [], []>,
  persistOptions: PersistOptions<Store>
) {
  const store = create<Store>()(
    persist<Store>(storeInitializer, persistOptions)
  );

  const useStoreSelector = createSelectors(store);

  return { store, useStoreSelector };
}
