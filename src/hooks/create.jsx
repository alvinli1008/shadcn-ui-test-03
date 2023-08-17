import { useDebugValue } from "react";

import { createStore } from "./vanilla";
import useSyncExternalStoreWithSelector from "./useSyncExternalStoreWithSelector";

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

// 柯里化函数
const createImpl = (createState) => {
  const api =
    typeof createState === "function" ? createStore(createState) : createState;
  const useBoundState = (selector, equalityFn) =>
    useStore(api, selector, equalityFn);

  Object.assign(useBoundState, api);
  return useBoundState;
};

export const create = (createState) =>
  createState ? createImpl(createState) : createImpl;
