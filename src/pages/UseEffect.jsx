import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Test");

  useEffect(() => {
    console.log("useEffect");
  }, [name, count]);

  return (
    <>
      <div>{count}</div>
      <div>{name}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={() => setName("Bhanu")}>Change name</button>
    </>
  );
};

export default UseEffect;
