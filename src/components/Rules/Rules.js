import React from "react";
import "./Rules.css";

const Rules = ({ setIsShowRules }) => {
  return (
    <button className="rules" onClick={() => setIsShowRules(true)}>
      RULES
    </button>
  );
};

export default Rules;
