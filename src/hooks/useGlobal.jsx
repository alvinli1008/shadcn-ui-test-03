import { create } from "./create";

const initialGlobalState = {
  current: 1,
  num: 0,
};

const useGlobal = create((set, get) => ({
  ...initialGlobalState,
  setState: (update) => set({ ...get(), ...update }),
}));

export default useGlobal;
