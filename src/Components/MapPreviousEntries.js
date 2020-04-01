import React from "react";
import Prompt from "./Prompt";

const MapPreviousEntries = ({ previousEntries }) => {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    // scroll to bottom of console display when user presses enter
    scrollRef.current &&
    (scrollRef.current.scrollTop = scrollRef.current.scrollHeight)
  });

  return (
    previousEntries.length > 0 && (
      <div className="previous-entries" ref={scrollRef}>
        {previousEntries.map((item, index) => (
          <div key={index}>
            <Prompt />
            <span className="text-properties">{item}</span>
          </div>
        ))}
      </div>
    )
  );
};

export default MapPreviousEntries;
