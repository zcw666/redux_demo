import React, { Component } from "react";
import {
  inputChangeAction,
  addItemAction,
  deleteItemAction
} from "./store/actionFun";

// import "antd/dist/antd.css";
// import { Input, Button, List } from "antd";
import store from "./store";
import TodolistUI from "./todolistUI";

class TodoList extends Component {
  storeChange() {
    this.setState(store.getState());
  }
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    // 交互事件
    this.inputChange = this.inputChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      // dom拆分后的写法
      <TodolistUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        inputChange={this.inputChange}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
      ></TodolistUI>
      //   dom拆分前的写法
      //   <div style={{ margin: "10px" }}>
      //     <div>
      //       <Input
      //         value={this.state.inputValue}
      //         placeholder="write someting"
      //         onChange={this.inputChange}
      //         style={{ width: "250px", marginRight: "10px" }}
      //       />
      //       <Button type="primary" onClick={this.addItem}>
      //         增加
      //       </Button>
      //     </div>
      //     <div style={{ margin: "10px", width: "300px" }}>
      //       <List
      //         bordered
      //         dataSource={this.state.list}
      //         renderItem={(item, index) => (
      //           <List.Item>
      //             <span className="m">{item}</span>
      //             <span className="m" onClick={() => this.deleteItem(index)}>
      //               删除
      //             </span>
      //           </List.Item>
      //         )}
      //       />
      //     </div>
      //   </div>
    );
  }

  inputChange(e) {
    console.log("inp", e.target.value);
    const action = inputChangeAction(e.target.value);
    store.dispatch(action);
  }
  addItem() {
    const action = addItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    console.log("deletItem", index);
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;
