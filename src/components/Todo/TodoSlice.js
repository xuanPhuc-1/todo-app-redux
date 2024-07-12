const initState =
  // Đây là nơi lưu trữ toàn bộ state của ứng dụng. Tại ứng dụng này có 2
  [
    // Mỗi thành phần trong này là một công việc cần làm
    {
      id: 1, // ID của công việc
      name: "Learn React", // Tên công việc
      completed: false, // Trạng thái hoàn thành
      priority: "High", // Mức độ ưu tiên
    },
    {
      id: 2,
      name: "Learn Redux",
      completed: false,
      priority: "Medium",
    },
    {
      id: 3,
      name: "Learn JavaScript",
      completed: false,
      priority: "Low",
    },
  ];

const todoListReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todoList/add": {
      // Nếu action.type là 'todoList/add'
      return {
        ...state, // Giữ nguyên toàn bộ state cũ
        todoList: [...state.todoList, action.payload], // Thêm công việc mới vào danh sách công việc
      };
    }
    default:
      return state;
  }
};

export default todoListReducer;
