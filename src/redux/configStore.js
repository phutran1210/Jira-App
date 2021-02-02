import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  // Khai báo reducer tại đây
});

const store = createStore(rootReducer);

export default store;
