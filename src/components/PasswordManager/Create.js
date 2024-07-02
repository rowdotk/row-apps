import React, { useState, useEffect, useMemo } from "react";
import "../../styles/PasswordManagerStyles.css";
import { jsonFields } from "../../utils/constants.js";

const Create = () => {
  return (
    <div className="main-container">
      <label for="name">Create New Password</label>

      {jsonFields.map((field) => (
        <input type="text" key={field} placeholder={field} />
      ))}

      <button type="submit"> Create </button>
    </div>
  );
};

export default Create;
