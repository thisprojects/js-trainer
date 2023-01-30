import React from "react";


// Higher order component which ensures scroll position within scroll boxes are always at the bottom.
export default WrappedComponent => {
  return ({ scrollContainer, array }) => {
    const scrollRef = React.useRef();

    React.useEffect(() => {
      scrollRef.current &&
        (scrollRef.current.scrollTop = scrollRef.current.scrollHeight);
    });

    return (
      <div className={ scrollContainer } ref={ scrollRef }>
        <WrappedComponent array={ array } />
      </div>
    );
  };
};
