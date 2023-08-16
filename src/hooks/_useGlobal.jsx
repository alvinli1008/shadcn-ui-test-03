import { _create } from "./_create";

const _initialGlobalState = {
  time: 0,
  count: 0,
};

const _useGlobal = _create((set, get) => ({
  ..._initialGlobalState,
  setState: (update) => set({ ...get(), ...update }),
}));

export default _useGlobal;