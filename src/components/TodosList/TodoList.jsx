import React from "react";
import todocss from "./todoLists.module.css";

const TodoLists = ({ name, handleDelete,handleCompletedList ,handleEdit }) => {
  return (
    <>
      <div className={todocss.activeList}>
        <input type="checkbox" className={todocss.checkbox}  onClick={handleCompletedList}/>
        <input type="text" className={todocss.input} disabled value={name} />
        <div>
          <i className={`fa-solid fa-pen-to-square ${todocss.icons}`} onClick={handleEdit}></i>
          <i onClick={handleDelete} className={`fa-solid fa-trash-can ${todocss.icons}`}></i>
        </div>
      </div>
    </>
  );
};

export default TodoLists;
