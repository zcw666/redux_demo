import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from "./type";

const defaultState = {
  inputValue: "",
  list: ["早上4点起床，锻炼身体", "中午下班游泳一小时"]
};
export default (state = defaultState, action) => {
  console.log("44", state);
  console.log("55", action);
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === INPUT_CHANGE) {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
