import React from "react";

const Header = () => {
  const instructionsRef = React.useRef();

  const handleClick = () => {
    instructionsRef.current.classList.toggle("hide");
  };

  return (
    <header className="text-properties instruction-header">
      <h3 onClick={ handleClick }>Instructions</h3>
      <div className="instructions hide" ref={ instructionsRef }>
        <h3>A Javascript Training Application</h3>
        <p>
          Type a javascript method into the console and press 'Enter' EG: "foo
          bar".includes("bar").
        </p>
        <p>The objective is to execute every javascript method in each catagory (Array methods, string methods, number methods) at least once.</p>
        <p>If the input is valid:</p>
        <ul>
          <li>You receive a tick for every method that is executed correctly.</li>
          <li>The methods counter is decresed by 1.</li>
          <li>The methods return value is displayed in the console.</li>
        </ul>
        <p>
          So how well do you know your Javascript? Now you can find out! Try and
          reduce the counters to 0.
        </p>
        <div className="close-button" onClick={handleClick}>X</div>
      </div>
      <h3 className="checklist">Method Checklist</h3>
    </header>
  );
};
export default Header;
