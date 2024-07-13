export const addTodo = (todo) => {
  return {
    type: "todoList/add",
    payload: todo,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};

export const searchFilterChange = (search) => {
  return {
    type: "filter/searchChange",
    payload: search,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  // priorities is an array
  return {
    type: "filter/prioritiesChange",
    payload: priorities,
  };
};
