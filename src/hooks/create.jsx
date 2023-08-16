import { useDebugValue, useSyncExternalStore } from "react";

import { createStore } from "./vanilla";

const useStore = (api, selector, equalityFn) => {
  const slice = useSyncExternalStore(api.subscribe, api.getState, api.getServerState || api.getState, selector, equalityFn);
  useDebugValue(slice);

  return slice;
};

const createImpl = createState => {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundState = (selector, equalityFn) => useStore(api, selector, equalityFn);

  Object.assign(useBoundState, api);
  return useBoundState;
};

export const create = createState => {
  return createState ? createImpl(createState) : createImpl;
};

