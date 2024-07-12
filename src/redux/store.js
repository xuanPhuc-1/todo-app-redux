import { createStore } from "redux"; // Import createStore
import rootReducer from "./reducer"; // Import rootReducer
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancers = composeWithDevTools(); // Tạo enhancer
const store = createStore(rootReducer, composedEnhancers); // Tạo store từ rootReducer

export default store;
