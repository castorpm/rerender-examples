import { useState } from "react";

const Child1 = () => {
  console.log("CHILD 1 RENDERS");

  return (
    <div style={{ background: "lightyellow" }}>
      <p style={{ color: "red" }}>this is the 1st child</p>
    </div>
  );
};

const Child2 = () => {
  console.log("CHILD 2 RENDERS");

  return (
    <div style={{ background: "lightgreen" }}>
      <p style={{ color: "green" }}>this is the 2nd child</p>
    </div>
  );
};

const ComponentWithCounter = ({ children }) => {
  const [counter, setCounter] = useState(0);

  console.log("COMPONENT WITH COUNTER RENDERS");

  return (
    <div>
      <p>counter: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase counter
      </button>

      {children}
    </div>
  );
};

const Parent = () => {
  console.log("PARENT RENDERS");

  return (
    <ComponentWithCounter>
      <div style={{ background: "lightblue", padding: "16px" }}>
        <p style={{ color: "blue" }}>this is the parent</p>

        <Child1 />
        <Child2 />
      </div>
    </ComponentWithCounter>
  );
};

const E3Page = () => <Parent />;
export default E3Page;
