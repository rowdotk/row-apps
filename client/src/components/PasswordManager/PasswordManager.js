import React, { useState, useEffect, useMemo } from "react";
import Create from "./Create.js";
import Navbar from "./Navbar.js";

const PasswordManager = () => {
  useEffect(() => {
    document.title = "Password Manager";
  }, []);

  const [payload, setPayload] = useState({});

  function submitOnClick() {
    const inputs = document.querySelectorAll("input");
    const newPayload = {};
    Array.from(inputs).forEach((input) => {
      newPayload[input.name] = input.value || null;
    });
    setPayload(newPayload);
  }

  console.log("---payload", payload);
  return (
    <div>
      <Navbar />
      <Create submitOnClick={submitOnClick} />
      <button className="submit-button" type="submit" onClick={submitOnClick}>
        Create
      </button>
    </div>
  );
};

export default PasswordManager;
