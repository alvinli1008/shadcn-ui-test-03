import { Button } from "./components/ui/button";
import { shallow } from "./hooks/shallow";
import useGlobal from "./hooks/useGlobal";

import Num from "./components/Num";

function App() {
  const [current, setState] = useGlobal(
    (state) => [state.current, state.setState],
    shallow
  );

  console.log("app", current);

  return (
    <div className="flex items-center justify-center flex-col p-10">
      <p>current --- {current}</p>
      <Button
        onClick={() => {
          setState({ current: current + 1 });
        }}
      >
        button
      </Button>
      <Num></Num>
    </div>
  );
}

export default App;
