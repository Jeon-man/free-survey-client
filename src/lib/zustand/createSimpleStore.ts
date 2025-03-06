import { StateCreator, create } from "zustand";
import createSelectors from "./createSelectors";

/**
 *
 * @param storeInitializer
 * @returns { store, useStoreSelector }
 * @description
 * This function creates a simple store with no actions.
 * It returns the store and a hook to select the store's state.
 * The store is created using Zustand.
 * The hook is created using the createSelectors helper function.
 */
export default function createSimpleStore<Store extends object>(
  storeInitializer: StateCreator<Store, [], []>
) {
  const store = create<Store>(storeInitializer);

  const useStoreSelector = createSelectors(store);

  return { store, useStoreSelector };
}
