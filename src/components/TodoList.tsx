import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo, { ITodo } from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { idx:1, title: "Html", project: "Html"},
    { idx:2, title: "Css", project: "Css"},
    { idx:3, title: "Javascript", project: "Javscript"},
    { idx:4, title: "React", project: "React"},
    { idx:5, title: "Vue", project: "Vue"},
  ]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo])
  };

  const deleteTodo = (idx: number) => {
    const newTodo = todos.filter((itme) => {
      return itme.idx !== idx;
    });
    setTodos(newTodo);
  };

  const updateTodo = (todo: ITodo) => {
    const newTodo = todos.map((item) => {
      if (item.idx === todo.idx) {
        return todo;
      } else {
        return item;
      }
    });
    setTodos(newTodo);
  };

  const Items = () => {
    return todos.map((item) => {
      return (
        <Todo idx={item.idx} title={item.title} project={item.project}></Todo>
      );
    });
  };

  return (
    <div className="todo-list-container">
      {/* <CreateTodo addTodo={addTodo} /> */}
      {Items()}
    </div>
  );
};

export default TodoList;
