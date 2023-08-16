import { Button } from "./components/ui/button";
import { shallow } from "./hooks/shallow";
import useGlobal from "./hooks/useGlobal";

function App() {
  const state = useGlobal((state) => state);

  console.log("app", state);

  return (
    <>
      {/* {state.current} */}
      <Button
        onClick={() => {
          console.log("click", state.current);
          // state.setState({ current: 2 });
        }}
      >
        button
      </Button>
    </>
  );
}

export default App;
