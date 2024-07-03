import React, { useState, useEffect, useMemo } from "react";
import { jsonFields } from "./../../utils/constants.js";

const Create = () => {
  useEffect(() => {
    document.title = "Password Manager";
  }, []);

  return (
    <div className="main-container">
      <div className="grid-item">
        <label for="name">Create New Password</label>
      </div>
      <div className="grid-item" id="inputs">
        {jsonFields.map((field) => (
          <input type="text" key={`input-${field}`} placeholder={field} />
        ))}
      </div>
      <div className="grid-item">
        <button type="submit"> Create </button>
      </div>
    </div>
  );
};

export default Create;
