import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/Todo/TodoSlice";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filters: filterReducer,
});

export default rootReducer;
