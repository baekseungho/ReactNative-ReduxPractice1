import { combineReducers } from "redux";
import bookReducers from "./bookReducers";

// 모든 리듀서를 포함하는 루트 리듀서 만들기
const rootReducer = combineReducers({
  bookReducers,
});

export default rootReducer;
