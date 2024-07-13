import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search; // Lấy ra giá trị của searchText từ state
export const statusFilterSelector = (state) => state.filters.status; // Lấy ra giá trị của status từ state
export const prioritiesFilterSelector = (state) => state.filters.priorities; // Lấy ra giá trị của priority từ state
export const todoListSelector = (state) => state.todoList; // Lấy ra giá trị của todoList từ state

export const filterTodoListSelector = createSelector(
  [
    searchTextSelector,
    statusFilterSelector,
    prioritiesFilterSelector,
    todoListSelector,
  ], // Truyền vào các selector cần sử dụng
  (searchText, statusFilter, priorities = [], todoList) => {
    // Hàm callback nhận vào các giá trị trả về từ các selector trên, đảm bảo priorities luôn là một mảng
    return todoList.filter((todo) => {
      if (statusFilter === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
        // Nếu độ dài priorities khác 0 thì lọc ra các công việc theo searchText và mức độ ưu tiên
        // nếu không thì chỉ lọc ra các công việc theo searchText
      }
      return (
        todo.name.includes(searchText) &&
        (statusFilter === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
        // Nếu độ dài priorities khác 0 thì lọc ra các công việc theo mức độ ưu tiên
      );
    });
  }
);
