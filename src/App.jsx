import { Button } from "./components/ui/button";
import { shallow } from "./hooks/shallow";
import useGlobal from "./hooks/useGlobal";

import Current from "./components/Current";
import Test01 from "./components/Test01";
import { useState } from "react";

function App() {
  const [current, setState] = useGlobal(
    (state) => [state.current, state.setState],
    shallow
  );
  const [count, setCount] = useState(0);

  console.log("app", current);

  return (
    <div className="flex items-center justify-center flex-col p-10">
      <p>{count}</p>
      <p>current --- {current}</p>
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
          setState({ current: current + 1 });
        }}
      >
        button
      </Button>
      <Current></Current>
      <Test01></Test01>
    </div>
  );
}

export default App;
