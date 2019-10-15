import { createStore } from "redux";
import reduscer from "./reducers";
const store = createStore(
  reduscer
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
