import React from "react";
import Props from "../components/props/Props";

const ProPage = () => {

  function clickme() {
    alert("Hello")
  }

  return (
    <>
      <Props
        name="sumit"
        email="sumit@gmail.com"
        other={{ address: "manpur", number: 6767 }}
        fun={clickme}
      />
      <Props
        name="yogendra"
        email="yogendra@gmail.com"
        other={{ address: "indore", number: 365824 }}
      />
      <Props
        name="bhanu"
        email="bhanu@gmail.com"
        other={{ address: "bholaram", number: 346274 }}
      />
      <Props
        name="pushpa"
        email="pushpa@gmail.com"
        other={{ address: "sanawad", number: 4234627 }}
      />
    </>
  );
};

export default ProPage;
