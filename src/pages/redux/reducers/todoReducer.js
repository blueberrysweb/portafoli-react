const initialState = [
  {
    id: 1,
    content: "Primera tasca",
    done: true,
  },
  {
    id: 2,
    content: "Segona tasca",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  let newlist = [...state];
  switch (action.type) {
    case "ADD_TASK":
      newlist.push({ content: action.payload, done: false });
      return newlist;
    case "ELIMINAR_TASK":
      newlist.splice(action.payload, 1);
      return newlist;
    case "RESET":
      return initialState;

    default:
      return state;
  }
};
export default todoReducer;
