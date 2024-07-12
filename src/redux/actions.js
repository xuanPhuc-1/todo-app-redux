export const addTodo = (todo) => {
  return {
    type: "todoList/add",
    payload: todo,
  };
};
export const searchFilterChange = (search) => {
  return {
    type: "filter/searchChange",
    payload: search,
  };
};
