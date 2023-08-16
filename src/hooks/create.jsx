import { useDebugValue, useSyncExternalStore } from "react";

import useSyncExternalStoreExports from "use-sync-external-store/shim/with-selector";

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;

import { createStore } from "./vanilla";

const useStore = (api, selector, equalityFn) => {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  useDebugValue(slice);

  return slice;
};

const createImpl = (createState) => {
  const api =
    typeof createState === "function" ? createStore(createState) : createState;
  const useBoundState = (selector, equalityFn) =>
    useStore(api, selector, equalityFn);

  Object.assign(useBoundState, api);
  // console.log("createImpl", useBoundState, api);
  return useBoundState;
};

export const create = (createState) => {
  return createState ? createImpl(createState) : createImpl;
};
