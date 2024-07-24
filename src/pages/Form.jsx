import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");
  const [checkbox, setChechbox] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    console.log(name, email, phone, option, checkbox);

    navigate("/");
  }

  function clearForm(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setOption("");
    setChechbox(false);
    localStorage.removeItem("data");
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />{" "}
        <br /> <br />
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />{" "}
        <br /> <br />
        <input
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />{" "}
        <br /> <br />
        <select
          required
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="">-Select Option-</option>
          <option value="Hello">Hello</option>
          <option value="Bye">Bye</option>
        </select>{" "}
        <br /> <br />
        <input
          required
          value={checkbox}
          onChange={(e) => setChechbox(e.target.checked)}
          type="checkbox"
        />{" "}
        <span>Terms & Conditions</span> <br /> <br />
        <button type="submit">Submit</button>
        <button onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
};

export default Form;
