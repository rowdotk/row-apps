import React, { useState, useEffect, useMemo } from "react";
import { jsonFields } from "../../utils/constants.js";

const Create = (props) => {
  return (
    <div className="create-form">
      <div className="inputs-container">
        {jsonFields.map((field) => (
          <>
            <label
              htmlFor={field}
              className="input-label"
              key={`${field}-label`}
            >
              {field}
            </label>
            <input
              className="create-inputs"
              name={field}
              type="text"
              key={field}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Create;
