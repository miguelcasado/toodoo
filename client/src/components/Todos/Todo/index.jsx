import React, { useContext } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import styles from "./todo.module.css";

import { deleteTodo } from "../../../api";
import TodosContext from "../../../context/TodosContext";

const Todo = ({ todo, setTodos }) => {
  const { setCurrentTodo } = useContext(TodosContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    setCurrentTodo(todo);
    navigate(`/edit/${todo.id}`);
  };

  const handleDelete = () => {
    deleteTodo(todo, setTodos);
  };

  return (
    <div className={styles.todoCard}>
      <h3>Title: {todo.title}</h3>
      <p>Creator: {todo.creator}</p>
      <p>Message: {todo.message}</p>
      <p>Tags: {todo.tags}</p>
      <p>Likes: {todo.likeCount}</p>
      <p>Created: {moment(todo.publicationDate).fromNow()}</p>
      {todo.selectedFile === "" ? <img src={todo.selectedFile} alt="" /> : null}
      <button className={styles.blue_button} onClick={handleEdit}>
        Edit
      </button>
      <button className={styles.red_button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
