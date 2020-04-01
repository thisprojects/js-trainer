import React from "react";
import { useSelector, useDispatch } from "react-redux";
import listOfMethods from "../Constants/methods";
import { displayCurrentMethodDescription, decrementType } from "../Actions";
import MapMethodChecklist from "../Components/MapMethodChecklist";

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

  const dispatch = useDispatch();

  const [methods, updateMethodList] = React.useState([]);

  React.useEffect(() => {
    // does the executed method exist in the list of methods?
    let foundMethod = findMethod(executedMethod);

    if (
      foundMethod &&
      !methods.includes(`${ foundMethod.type }: ${ foundMethod.method }`)
    ) {
      // if the executed method has been found in the method list AND 
      // the executed method has not already been checked off the list
      updateMethodList(methods =>
        methods.concat(`${ foundMethod.type }: ${ foundMethod.method }`)
      );
      dispatch(displayCurrentMethodDescription(foundMethod.description));
      dispatch(decrementType(foundMethod.type.toUpperCase()));
    }
  }, [executedMethod, dispatch, methods]);

  return (
    <section className="text-properties method-list-wrapper">
      <MapMethodChecklist array={ methods } scrollContainer={ "method-list" } />
    </section>
  );
};

export default MethodChecklist;
