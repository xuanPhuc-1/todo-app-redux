import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/Todo/TodoSlice";

const rootReducer = (state = {}, action) => {
  return {
    todoList: todoListReducer(state.todoList, action), // truyền initialState của todoList vào todoListReducer thành state.todoList
    // Gọi reducer của todoList và state.todoList là state của todoList
    filters: filterReducer(state.filters, action),
  };
};

export default rootReducer;
