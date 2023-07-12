export const Child = () => {
  console.log("CHILD RENDERS");

  return (
    <div style={{ background: "lightyellow" }}>
      <p style={{ color: "red" }}>this is the child</p>
    </div>
  );
};
