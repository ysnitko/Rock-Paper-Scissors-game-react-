import React from "react";
import guide from "../../helpers/img/image-rules.svg";
import "./RulesCard.css";

const RulesCard = ({ setIsShowRules }) => {
  return (
    <div className="rules-card">
      <span className="header-title">RULES</span>
      <button className="close-btn" onClick={() => setIsShowRules(false)}>
        +
      </button>
      <img className="rules-guide" src={guide} alt="guide" />
    </div>
  );
};

export default RulesCard;
