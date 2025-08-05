import { useContext, createContext, useState } from "react";

export const Mycontext = createContext();

export function Todoprovider({ children }) {
  const [todoitem, setTodoitem] = useState([]);

  const addTodo = (todo) => {
    setTodoitem((prev) => [...prev, todo]);
  };

  const deleteTodo = (todoId) => {
    setTodoitem((prev) => prev.filter((item) => item.id !== todoId));
  };

  return (
   <Mycontext.Provider value={{todoitem,addTodo,deleteTodo}}>
    {children}
   </Mycontext.Provider>
  );
}

export const useTodos = () => useContext(Mycontext);
