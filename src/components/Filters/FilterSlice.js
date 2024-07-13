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
    case "filter/statusChange": {
      // Nếu action.type là 'filter/statusChange'
      return {
        ...state, // Giữ nguyên toàn bộ bộ lọc cũ
        status: action.payload, // Cập nhật bộ lọc trạng thái
      };
    }
    case "filter/prioritiesChange": {
      // Nếu action.type là 'filter/prioritiesChange'
      return {
        ...state, // Giữ nguyên toàn bộ bộ lọc cũ
        priorities: action.payload, // Cập nhật bộ lọc mức độ ưu tiên
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
