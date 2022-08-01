import React, { useState, useContext } from "react";
import FileBase from "react-file-base64";

import { createTodo } from "../../api";

//import StaticContext from "../../context/StaticContext";
import TodosContext from "../../context/TodosContext";

import styles from "./form.module.css";

const Form = () => {
  //const staticContext = useContext(StaticContext);
  const { setTodos } = useContext(TodosContext);

  const [todoData, setTodoData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todoData, setTodos);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  };

  //const clearForm = () => {};

  return (
    <>
      <form action="" autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h6 className={styles.form_title}>Create todo</h6>
        <div className={styles.container}>
          <input
            className={styles.inputField}
            id="titleTextInput"
            type="text"
            name="title"
            value={todoData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            className={styles.inputField}
            id="creatorTextInput"
            type="text"
            name="creator"
            value={todoData.creator}
            onChange={handleChange}
            placeholder="Creator"
          />
          <input
            className={styles.inputField}
            id="messageTextInput"
            type="text"
            name="message"
            value={todoData.message}
            onChange={handleChange}
            placeholder="Message"
          />
          <input
            className={styles.inputField}
            id="tagsTextInput"
            type="text"
            name="tags"
            value={todoData.tags}
            onChange={handleChange}
            placeholder="Tags"
          />
          {/*
          <div className={styles.inputField}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setTodoData({ ...todoData, selectedFile: base64 })
              }
            />
          </div>
          */}
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
