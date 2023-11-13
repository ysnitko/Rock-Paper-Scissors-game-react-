import React from "react";
import "./Empty.css";

const Empty = () => {
  return (
    <div className="picked-turn-empty">
      <span className="picked-empty">THE HOUSE PICKED</span>
      <div className="empty"></div>
    </div>
  );
};

export default Empty;
