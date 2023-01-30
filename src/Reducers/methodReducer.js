import methods from "./../Constants/methods";

const initialState = {
  executedMethod: "",
  currentMethodDescription: "",
  arrayCount: methods.filter(item => item.type === "array").length,
  numberCount: methods.filter(item => item.type === "number").length,
  stringCount: methods.filter(item => item.type === "string").length
};

const methodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_METHOD":
      return {
        ...state,
        executedMethod: action.payload
      };
    case "DISPLAY_DESCRIPTION":
      return {
        ...state,
        currentMethodDescription: action.payload
      };
    case "DECREMENT_ARRAY":
      return {
        ...state,
        arrayCount: (state.arrayCount -= 1)
      };
    case "DECREMENT_NUMBER":
      return {
        ...state,
        numberCount: (state.numberCount -= 1)
      };
    case "DECREMENT_STRING":
      return {
        ...state,
        stringCount: (state.stringCount -= 1)
      };
    default:
      return state;
  }
};

export default methodReducer;
