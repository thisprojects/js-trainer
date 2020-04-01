import React from "react";
import Prompt from "./Prompt";
import WithScrollToBottom from "./WithScrollToBottom";

const MapPreviousEntries = ({ array }) => {
  return (
    array.length > 0 &&
    array.map((item, index) => (
      <div key={ index }>
        <Prompt />
        <span className="text-properties">{ item }</span>
      </div>
    ))
  );
};

export default WithScrollToBottom(MapPreviousEntries);
