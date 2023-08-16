
import { create } from "./create";

const initialGlobalState = {
  current: 1,
}

const useGlobal = create((set, get) => ({
  ...initialGlobalState,
  setState: update => set({ ...get(), ...update })
}));

export default useGlobal;
