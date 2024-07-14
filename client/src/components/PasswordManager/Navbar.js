import React, { useState, useEffect, useMemo } from "react";

const Navbar = (props) => {
  return (
    <ul className="nav nav-pills" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="pill" href="#search">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#create">
          Create
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
