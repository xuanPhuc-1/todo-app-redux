import { createSelector } from "reselect";
export const searchTextSelector = (state) => state.filters.search; // Lấy ra giá trị của searchText từ state
export const todoListSelector = (state) => state.todoList; // Lấy ra giá trị của todoList từ state
export const filterTodoListSelector = createSelector(
  [searchTextSelector, todoListSelector], // Truyền vào các selector cần sử dụng
  (searchText, todoList) => {
    // Hàm callback nhận vào các giá trị trả về từ các selector trên
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);
// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todoRemaining;
// };
