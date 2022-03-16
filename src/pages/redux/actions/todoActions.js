export const addtask = (item) => {
  console.log("add", item);
  return {
    type: "ADD_TASK",
    payload: item,
  };
};
export const eliminartask = (item) => {
  console.log("add", item);
  return {
    type: "ELIMINAR_TASK",
    payload: item,
  };
};
