export const createProject = project => {
  // normally return an object, but thunk can return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
