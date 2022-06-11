import { platformApi } from "./api";
import { NotificationHandler } from "./NotificationHandler";

const getAllTodoLists = async () => {
  try {
    const res = await platformApi.get("/");
    let response = res.data;
    if (response?.status && response?.data) {
      return response.data;
    } else {
      NotificationHandler(
        "error",
        response.message || "Error in fetching todo lists"
      );
      return [];
    }
  } catch (error) {
    NotificationHandler("error", "Error in fetching todo lists");
    return [];
  }
};

const createTodoList = async (reqData) => {
  try {
    const res = await platformApi.post("/", reqData);
    let response = res.data;
    if (response?.status) {
      return true;
    } else {
      NotificationHandler(
        "error",
        response.message || "Error in creating todo list"
      );
      return false;
    }
  } catch (error) {
    NotificationHandler("error", "Error in creating todo list");
    return false;
  }
};

const updateTodoList = async (uuid,reqData) => {
  try {
    const res = await platformApi.put(`/${uuid}`, reqData);
    let response = res.data;
    if (response?.status) {
      return true;
    } else {
      NotificationHandler(
        "error",
        response.message || "Error in updating todo list"
      );
      return false;
    }
  } catch (error) {
    NotificationHandler("error", "Error in updating todo list");
    return false;
  }
};

const deleteTodoList = async (uuid) => {
  try {
    const res = await platformApi.delete(`/${uuid}`);
    let response = res.data;
    if (response?.status) {
      return true;
    } else {
      NotificationHandler(
        "error",
        response.message || "Error in deleting todo list"
      );
      return false;
    }
  } catch (error) {
    NotificationHandler("error", "Error in deleting todo list");
    return false;
  }
};

export { getAllTodoLists, createTodoList, updateTodoList,deleteTodoList };
