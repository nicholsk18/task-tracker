import React from "react";
import "./View.css";

const View = ({ type, name }) => {
  return (
    <>
      <div className="view-component">
        <h2>
          {type}
          <span>{name}</span>
        </h2>
      </div>
    </>
  );
};

export default View;
