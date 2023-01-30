import React from "react";

const Prompt = () => (
  <span className="text-properties">
    { window.innerWidth > 600 ? "Console:>" : ":>" }
  </span>
);

export default Prompt;
