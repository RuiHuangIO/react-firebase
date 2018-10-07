export const createProject = project => {
  // normally return an object, but thunk can return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Rui",
        authorLastName: "Huang",
        authorID: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
