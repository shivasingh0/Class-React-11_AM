import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        display: "flex",
        gap: "10px",
      }}
    >
      <Link
        to={"/"}
        style={{ color: "white", textAlign: "center", fontSize: "20px" }}
      >
        Home
      </Link>
      <Link
        to={"/prop"}
        style={{ color: "white", textAlign: "center", fontSize: "20px" }}
      >
        Props
      </Link>
      <Link
        to={"/update-state"}
        style={{ color: "white", textAlign: "center", fontSize: "20px" }}
      >
        UpdateState
      </Link>
      <Link
        to={"/todo"}
        style={{ color: "white", textAlign: "center", fontSize: "20px" }}
      >
        Todo
      </Link>
      <Link
        to={"/form"}
        style={{ color: "white", textAlign: "center", fontSize: "20px" }}
      >
        Form
      </Link>
    </div>
  );
};

export default HomePage;
