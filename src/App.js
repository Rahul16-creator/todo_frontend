import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import CreateList from "./components/Createlist";
import TodolistShow from "./components/TodosList";
import { v4 as uuidv4 } from "uuid";
import CompletedList from "./components/completedList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationHandler } from "./utils/NotificationHandler";
import {
  createTodoList,
  deleteTodoList,
  getAllTodoLists,
  updateTodoList,
} from "./utils/Service";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [completedTodoLists, setCompletedTodoLists] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllTodoLists();
      let todoList = response.filter((i) => !i.completed);
      let CompletedList = response.filter((i) => i.completed);
      setTodoLists(todoList);
      setCompletedTodoLists(CompletedList);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      handleUpdate();
      setIsUpdate(false);
      return;
    }
    let data = { uuid: uuidv4(), name: todo, completed: false };
    let isCreated = await createTodoList(data);
    if (isCreated) {
      let lists = [...todoLists, data];
      setTodoLists(lists);
      setTodo("");
      NotificationHandler("success", "Todo Successfuly Created");
    }
  };

  const handleUpdate = async () => {
    let data = { uuid: id, name: todo, completed: false };
    let isUpdated = await updateTodoList(id, data);
    if (isUpdated) {
      let updatedList = [...todoLists, data];
      setTodoLists(updatedList);
      setTodo("");
      setId(null);
      NotificationHandler("success", "Todo Successfuly Updated");
    }
  };

  const filterList = (uuid) => {
    return todoLists.filter((val) => val.uuid !== uuid);
  };

  const handleDelete = async (uuid) => {
    let isDeleted = await deleteTodoList(uuid);
    if (isDeleted) {
      let lists = filterList(uuid);
      setTodoLists(lists);
      NotificationHandler("success", "Todo Successfuly Deleted");
    }
  };

  const handleCompletedList = async (uuid) => {
    let data = todoLists.find((i) => i.uuid === uuid);
    data.completed = true;
    let isUpdated = await updateTodoList(uuid, data);
    if (isUpdated) {
      let lists = filterList(uuid);
      setTodoLists(lists);
      let completedList = [...completedTodoLists, data];
      setCompletedTodoLists(completedList);
      NotificationHandler("success", "Congrats on Completing Todo");
    }
  };

  const handleEdit = (uuid) => {
    let data = todoLists.find((i) => i.uuid === uuid);
    let lists = filterList(uuid);
    setTodoLists(lists);
    setIsUpdate(true);
    setId(data.uuid);
    setTodo(data.name);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="wrapper">
        <Header />
        <CreateList
          todo={todo}
          setTodo={setTodo}
          handleSubmit={handleSubmit}
          isUpdate={isUpdate}
        />
        <TodolistShow
          todoLists={todoLists}
          handleDelete={handleDelete}
          handleCompletedList={handleCompletedList}
          handleEdit={handleEdit}
        />
        <CompletedList completedList={completedTodoLists} />
      </div>
    </div>
  );
};

export default App;
