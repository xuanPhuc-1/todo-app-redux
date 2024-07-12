const initState = {
  // Đây là nơi lưu trữ toàn bộ state của khối filter.
  search: "",
  status: "All",
  priority: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter/searchChange": {
      // Nếu action.type là 'filter/searchChange'
      return {
        ...state, // Giữ nguyên toàn bộ bộ lọc cũ
        search: action.payload, // Cập nhật bộ lọc tìm kiếm
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
