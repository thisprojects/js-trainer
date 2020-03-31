import React from "react";
import { useSelector } from "react-redux";

const MethodDescription = () => {
  const description = useSelector(
    state => state.methodReducer.currentMethodDescription
  );
  return (
    <section className="text-properties method-description">
      <p>{description}</p>
    </section>
  );
};

export default MethodDescription;
