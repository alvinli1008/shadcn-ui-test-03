import { shallow } from "../hooks/shallow";
import useGlobal from "../hooks/useGlobal";
import { memo } from "react";
import { Button } from "./ui/button";

function Current() {
  const [num, setState] = useGlobal(
    (state) => [state.num, state.setState],
    shallow
  );

  console.log("current");
  return (
    <div>
      num {num}
      <Button
        onClick={() => {
          setState({ num: num + 1 });
        }}
      >
        num++
      </Button>
    </div>
  );
}

Current.displayName = "Current";

export default memo(Current);
