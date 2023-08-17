import { memo } from "react";
import useGlobal from "../hooks/useGlobal";
import { Button } from "./ui/button";

import { isEqual as shallow } from "lodash";

function Num() {
  const [num, setState] = useGlobal(
    (state) => [state.num, state.setState],
    shallow
  );

  console.log("Num");
  return (
    <div>
      <p>num --- {num}</p>
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
