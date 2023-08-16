
import { create } from "./create";

const initialGlobalState = {
  current: 1,
}

const useGlobal = create((get, set) => ({
  ...initialGlobalState,
  setState: update => set({ ...get(), ...update })
}));

export default useGlobal;
