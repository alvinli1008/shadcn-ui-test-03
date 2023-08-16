import { Button } from "./components/ui/button";
import { shallow } from "./hooks/shallow";
import useGlobal from "./hooks/useGlobal";

function App() {
  const state = useGlobal((state) => state, shallow);

  console.log("app", state);

  return (
    <>
      <p>{state.current}</p>
      <Button
        onClick={() => {
          state.setState({ current: state.current + 1 });
        }}
      >
        button
      </Button>
    </>
  );
}

export default App;
