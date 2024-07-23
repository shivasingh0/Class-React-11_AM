import React, { useState } from "react";

const UpdateState = () => {
  const [status, setStatus] = useState(true);
  return (
    <div>
      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button> */}
       <button onClick={()=>setStatus(!status)}>Toggle</button>
      {
        status ? <h1>Hello class</h1> : null
      }
    </div>
  );
};

export default UpdateState;
