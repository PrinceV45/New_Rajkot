import React, { useState } from 'react'
import { MyContext } from './Todocontext.jsx';

function Todoapp() {

      const [data,setData]=useState({Todoname:" "});

       const { todoitem, addTodo, deleteTodo } = useContext(MyContext);

     const handleChange = (e)=>{
        
      const {name,value} = e.target;
      setData((prev) =>({...prev,[name]:value}));

     }

     const handleSubmit = (e)=>{
       e.preventDefault();
      
       const newTodo = {
      id: Date.now(), 
      Todoname: data.Todoname.trim()
    };

       addTodo(newTodo);     
       alert('Todo added'); 
       setData({Todoname:" "});
     }
    
   

  return (
    <div>

      <form onSubmit={handleSubmit}>       
      <label>
        Todoname
      </label>

     <input type='text'
     name='Todoname'
     value={data.Todoname}
     placeholder='Pls Enter todo'
     onChange={handleChange}
     required
     ></input>
      <button type='submit'>Add Todo</button>
     </form>
     
     <ul>
        {todoItem.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
};

export default Todoapp
