import React from "react";
import Prompt from "./Prompt";
import { useDispatch } from "react-redux";
import { addExecutedMethod } from "./../Actions";
import MapPreviousEntries from "./MapPreviousEntries";

const Console = () => {
  const textValue = React.useRef();

  const [previousEntries, updatepreviousEntries] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    textValue.current.value = "";
    textValue.current.focus();
  }, [ previousEntries ]);

  const handleKeyPress = e => {
    if (e.key === "Enter") {

      const currentTextValue = textValue.current.value;
      let lineOfText;

      try {
        lineOfText = `${ currentTextValue } => ${ eval(currentTextValue) }`;
        dispatch(addExecutedMethod(currentTextValue));
      } catch (e) {
        lineOfText = `${ e }`;
      }

      updatepreviousEntries(previousEntries =>
        previousEntries.concat(lineOfText)
      );
    }
  };

  return (
    <section className="console">
      <MapPreviousEntries previousEntries={ previousEntries } />
      <div className="input-prompt">
        <Prompt />
        <input
          className="text-properties"
          type="text"
          ref={ textValue }
          onKeyPress={ handleKeyPress }
        />
      </div>
    </section>
  );
};

export default Console;
