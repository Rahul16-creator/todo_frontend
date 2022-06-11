import React from "react";
import createListCss from "./createlist.module.css";

const CreateList = ({ todo, setTodo, handleSubmit, isUpdate }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={createListCss.form}>
        <input
          type="text"
          className={createListCss.input}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className={`${createListCss.btn} ${
            todo === "" ? createListCss.btn_disable : ""
          }`}
          disabled={todo === "" ? true : false}
        >
          {isUpdate ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default CreateList;
