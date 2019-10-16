import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const TodolistUI = props => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder="write someting"
          onChange={props.inputChange}
          style={{ width: "250px", marginRight: "10px" }}
        />
        <Button type="primary" onClick={props.addItem}>
          增加
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item>
              <span className="m">{item}</span>
              <span className="m" onClick={() => props.deleteItem(index)}>
                删除
              </span>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default TodolistUI;
