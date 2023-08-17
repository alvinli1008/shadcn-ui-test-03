import { memo } from "react";
import { shallow } from "../hooks/shallow";
import useGlobal from "../hooks/useGlobal";
import { Button } from "./ui/button";

function Current() {
  const [current, setState] = useGlobal(
    (state) => [state.current, state.setState],
    shallow
  );

  console.log("Current");
  return (
    <div>
      <p>current --- {current}</p>
      <Button
        onClick={() => {
          setState({ current: current + 1 });
        }}
      >
        current++
      </Button>
    </div>
  );
}

Current.displayName = "Current";

export default memo(Current);
