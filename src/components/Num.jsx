import { shallow } from "../hooks/shallow";
import useGlobal from "../hooks/useGlobal";
import { memo } from "react";
import { Button } from "./ui/button";

function Num() {
  const [num, setState] = useGlobal(
    (state) => [state.num, state.setState],
    shallow
  );

  console.log("Num");
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

Num.displayName = "Num";

export default memo(Num);
