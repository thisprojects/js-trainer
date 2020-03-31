import React from "react";
import { useSelector, useDispatch } from "react-redux";
import listOfMethods from "./../Constants/methods";
import { displayCurrentMethodDescription, decrementType } from "./../Actions";

const findMethod = method =>
  listOfMethods.find(item => {
    // regex match with a word boundry so only whole method name will match
    let regex = new RegExp(`\\b${ item.method }\\b`);
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

  const methodRef = React.useRef();

  const scrollToBottom = ref =>
    (ref.current.scrollTop = ref.current.scrollHeight);

  const dispatch = useDispatch();

  const [ methods, updateMethods ] = React.useState([]);

  React.useEffect(() => {
    let foundMethod = findMethod(executedMethod);

    if (
      foundMethod &&
      !methods.includes(`${ foundMethod.type }: ${ foundMethod.method }`)
    ) {
      updateMethods(methods =>
        methods.concat(`${ foundMethod.type }: ${ foundMethod.method }`)
      );
      dispatch(displayCurrentMethodDescription(foundMethod.description));
      dispatch(decrementType(foundMethod.type.toUpperCase()));
    }

    scrollToBottom(methodRef);  
  }, [ executedMethod, dispatch, methods ]);

  return (
    <section className="text-properties method-list-wrapper">
      <div className="method-list" ref={ methodRef }>
        { methods.map(item => (
          <p>{ item } &#10003;</p>
        ))}
      </div>
    </section>
  );
};

export default MethodChecklist;
