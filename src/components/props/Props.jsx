import React from "react";

const Props = (parameter) => {
  console.log(parameter.name);
  console.log(parameter.email);
  console.log(parameter.other.address);
  console.log(parameter.other.number);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{parameter.name}</h1>
      <h1>{parameter.email}</h1>
      <h1>{parameter.other.address}</h1>
      <h1>{parameter.other. number}</h1>

      <button onClick={parameter.fun}>Click me</button>
    </div>
  );
};

export default Props;
