import { shallow } from "../hooks/shallow";
import useGlobal from "../hooks/useGlobal";
import React, { memo } from "react";

function Current() {
  const { num } = useGlobal((state) => state, shallow);
  console.log("current");
  return <div>num {num}</div>;
}

export default memo(Current);
