import React from "react";
import { useSelector } from "react-redux";

const MethodCounters = () => {
  const { arrayCount, stringCount, numberCount } = useSelector(
    state => state.methodReducer
  );
  return (
    <section className="text-properties counter-display">
      <p>ArrayMethods: { arrayCount }</p>
      <p>StringMethods: { stringCount }</p>
      <p>NumberMethods: { numberCount }</p>
    </section>
  );
};

export default MethodCounters;
