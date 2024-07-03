import React, { useState, useEffect, useMemo } from "react";
import { jsonFields } from "../../utils/constants.js";

const Create = (props) => {
  const { submitOnClick } = props;

  return (
    <div className="create-container">
      <label className="create-title">Create New Password</label>
      <div className="inputs-container" id="inputs">
        {jsonFields.map((field) => (
          <div key={field} className="input-group">
            <label htmlFor={field} className="input-label">
              {field}
            </label>
            <input className="create-inputs" name={field} type="text" />
          </div>
        ))}
      </div>
      <div>
        <button className="create-button" type="submit" onClick={submitOnClick}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;
