import { create } from "./create";

const initialGlobalState = {
  current: 1,
  num: 0,
};

const useGlobal = create((set) => ({
  ...initialGlobalState,
  setState: (update) => set((state) => ({ ...state, ...update })),
}));

export default useGlobal;
