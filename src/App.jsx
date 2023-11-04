import { useState } from "react"
import "./styles.css"
import { ToDoForm } from "./ToDoForm"
import { ToDoList } from "./ToDoList"

export default function App(){
  const [todos, setTodos] = useState([])

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo =>{
        if (todo.id === id){
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)

        }
    )
  }

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  return(
  <>
  <ToDoForm onSubmit={addTodo}/>
  <h1 className="header">To-Do List</h1>
  <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}
