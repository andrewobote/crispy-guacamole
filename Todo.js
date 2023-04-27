import "../App.css";
import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState([false, ""]);
  const [edited, setEdited] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
        date: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      fetchPost();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTodo("");
  };

  const delTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    console.log("Document deleted with ID: ", id);
    fetchPost();
  };

  const editTodo = async (id) => {
    if (edit[0]) {
      await updateDoc(doc(db, "todos", id), { todo: edited });
      edit[0] && console.log("Document updated with ID: ", id);
      fetchPost();
    }
    setEdit((prevEdit) => (prevEdit[0] ? [false, ""] : [true, id]));
  };

  const fetchPost = async () => {
    await getDocs(
      query(collection(db, "todos"), orderBy("date", "desc"), limit(9))
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      //console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const todoContent = todos.map((todo) => (
    <div key={todo.id} className="todo-content">
      <button className="btn" onClick={() => delTodo(todo.id)}>
        Del
      </button>
      <button className="btn" onClick={() => editTodo(todo.id)}>
        {edit[0] && todo.id === edit[1] ? "Save" : "Edit"}
      </button>
      <span className="date">
        {JSON.stringify(
          todo.date.toDate().toLocaleDateString("en-us", {
            weekday: "short",
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          })
        )}
      </span>
      <span style={todo.id === edit[1] ? { display: "none" } : {}}>
        {todo.todo}
      </span>
      <input
        type="text"
        defaultValue={todo.todo}
        className="textInput"
        style={
          todo.id === edit[1] ? { display: "inline" } : { display: "none" }
        }
        onChange={(e) => setEdited(e.target.value)}
      />
    </div>
  ));

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">
          Never do yesterday what should be done tomorrow
        </h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to do today?"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn"
              onClick={todo ? addTodo : null}
            >
              Add
            </button>
          </div>
        </div>
        <div>{todoContent}</div>
      </div>
    </section>
  );
};

export default Todo;
