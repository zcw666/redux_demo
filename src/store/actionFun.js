import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from "./type";
export const inputChangeAction = val => ({
  type: INPUT_CHANGE,
  value: val
});
export const addItemAction = val => ({
  type: ADD_ITEM,
  value: val
});
export const deleteItemAction = val => ({
  type: DELETE_ITEM,
  value: val
});
