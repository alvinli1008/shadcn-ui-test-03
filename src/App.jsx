import { useState } from "react";
import { Button } from "./components/ui/button";
import Num from "./components/Num";
import Current from "./components/Current";
import Test01 from "./components/Test01";

function App() {
  const [count, setCount] = useState(0);
  console.log("app");

  return (
    <div className="flex items-center justify-center flex-col p-10">
      count --- {count}
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        count++
      </Button>
      <p className="py-4"></p>
      <Current></Current>
      <p className="py-4"></p>
      <Num></Num>
      <p className="py-4"></p>
      <Test01></Test01>
    </div>
  );
}

export default App;
