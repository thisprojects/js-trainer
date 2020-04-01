import React from "react";
import { useSelector, useDispatch } from "react-redux";
import listOfMethods from "./../Constants/methods";
import { displayCurrentMethodDescription, decrementType } from "./../Actions";

const findMethod = method =>
  listOfMethods.find(item => {
    // regex match with a word boundry so only whole method name will match
    let regex = new RegExp(`\\b${item.method}\\b`);
    if (method.match(regex)) {
      return (
        // Handle string and array prototype name collisions EG array.includes and string.includes
        (method.includes("[") &&
          method.includes("]") &&
          item.type === "array") ||
        (item.type !== "array" &&
          !method.includes("[") &&
          !method.includes("]"))
      );
    }
  });

const MethodChecklist = () => {
  const executedMethod = useSelector(
    state => state.methodReducer.executedMethod
  );

  const dispatch = useDispatch();

  const [methods, updateMethodList] = React.useState([]);

  React.useEffect(() => {
    let foundMethod = findMethod(executedMethod);

    if (
      foundMethod &&
      !methods.includes(`${foundMethod.type}: ${foundMethod.method}`)
    ) {
      updateMethodList(methods =>
        methods.concat(`${foundMethod.type}: ${foundMethod.method}`)
      );
      dispatch(displayCurrentMethodDescription(foundMethod.description));
      dispatch(decrementType(foundMethod.type.toUpperCase()));
    }
  }, [executedMethod, dispatch, methods]);

  return (
    <section className="text-properties method-list-wrapper">
      <MethodList methods={methods} />
    </section>
  );
};

const MethodList = ({ methods }) => {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    // scroll to bottom of console display when user presses enter
    scrollRef.current &&
      (scrollRef.current.scrollTop = scrollRef.current.scrollHeight);
  });

  return (
    <div className="method-list" ref={ scrollRef }>
      {methods.map(item => (
        <p>{item} &#10003;</p>
      ))}
    </div>
  );
};

export default MethodChecklist;
