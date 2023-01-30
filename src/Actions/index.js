export const addExecutedMethod = method => ({
  type: "ADD_METHOD",
  payload: method
});

export const displayCurrentMethodDescription = description => ({
  type: "DISPLAY_DESCRIPTION",
  payload: description
});

export const decrementType = (type) => ({ type: `DECREMENT_${type}` })
