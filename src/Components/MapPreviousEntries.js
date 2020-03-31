import React from "react";
import Prompt from "./Prompt";

const MapPreviousEntries = ({ previousEntries }) =>
  previousEntries.length > 0 && (
    <div className="previous-entries">
      {previousEntries.map((item, index) => (
        <div key={index}>
          <Prompt />
          <span className="text-properties">{item}</span>
        </div>
      ))}
    </div>
  );

export default MapPreviousEntries;
