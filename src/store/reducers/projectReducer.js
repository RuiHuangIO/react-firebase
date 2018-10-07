const initState = {
  projects: [
    { id: "1", title: "wutface", content: "git spooked" },
    { id: "2", title: "omegalul", content: "git loled" },
    { id: "3", title: "pagchomp", content: "git exicited" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
