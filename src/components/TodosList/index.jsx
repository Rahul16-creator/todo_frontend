import React from "react";
import TodoLists from "./TodoList";
import todocss from "./todoLists.module.css";

const TodolistShow = ({
  todoLists = [],
  handleDelete,
  handleCompletedList,
  handleEdit
}) => {
  return (
    <div className={todocss.container}>
      {todoLists.map((val) => {
        return (
          <TodoLists
            key={val.uuid}
            name={val.name}
            handleDelete={() => handleDelete(val.uuid)}
            handleCompletedList={() => handleCompletedList(val.uuid)}
            handleEdit={()=>handleEdit(val.uuid)}
          />
        );
      })}
    </div>
  );
};

export default TodolistShow;
