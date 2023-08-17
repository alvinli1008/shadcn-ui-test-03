import { memo, useSyncExternalStore } from "react";
import { createStore } from "../hooks/vanilla";
import { Button } from "./ui/button";

const useTest01 = createStore((set) => {
  return {
    test: 1,
    weight: 0,
    child: 0,
    setState: (update) => set((state) => ({ ...state, ...update })),
  };
});

const Test01Children = memo(() => {
  const child = useSyncExternalStore(
    useTest01.subscribe,
    () => useTest01.getState().child
  );

  console.log("Test01Children");
  return <div>Test01Children ---- {child}</div>;
});

Test01Children.displayName = "Test01Children";

function Test01() {
  const state = useSyncExternalStore(useTest01.subscribe, () =>
    useTest01.getState()
  );

  console.log("Test01", state);
  return (
    <div>
      Test01 --- {state.test}
      <Button
        onClick={() => {
          state.setState({ test: state.test + 1 });
        }}
      >
        test++
      </Button>
      <Test01Children></Test01Children>
    </div>
  );
}

export default Test01;
