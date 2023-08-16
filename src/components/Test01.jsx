import { Button } from "./ui/button";
import _useGlobal from "@/hooks/_useGlobal";
import { memo } from "react";
import { shallow } from "@/hooks/shallow";

const Test01Children = memo(() => {
  const [count, setState] = _useGlobal(
    (state) => [state.count, state.setState],
    shallow
  );

  console.log("Test01Children");
  return (
    <div>
      <p>count: {count}</p>
      <Button
        onClick={() => {
          setState({ count: count + 1 });
        }}
      >
        count++
      </Button>
    </div>
  );
});

Test01Children.displayName = "Test01Children";

const Test01 = memo(() => {
  // const [time, setState] = _useGlobal(
  //   (state) => [state.time, state.setState],
  //   shallow
  // );

  const { time, setState } = _useGlobal();

  console.log("Test01");
  return (
    <div>
      <p>time {time}</p>
      <Button
        onClick={() => {
          setState({ time: time + 1 });
        }}
      >
        time++
      </Button>
      <Test01Children></Test01Children>
    </div>
  );
});

Test01.displayName = "Test01";

export default Test01;
