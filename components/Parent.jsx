import { useState } from "react";

export const Parent = () => {
  const [counter, setCounter] = useState(0);

  console.log("PARENT RENDERS");

  return (
    <div style={{ background: "lightblue", padding: "16px" }}>
      <p style={{ color: "blue" }}>this is the parent</p>
      <p>counter: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase counter
      </button>
      <div>
        <Child />
      </div>
    </div>
  );
};
