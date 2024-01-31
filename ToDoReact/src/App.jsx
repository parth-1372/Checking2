import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './Contexts'
import TodoItem from './Components/TodoItem'
import { TodoForm } from './Components'

function App() {
   const [todos , setTodos] = useState([])
    
   const addTodo = (Todo) => {
    setTodos((prev) => [{id:Date.now(), ...Todo}, ...prev])
   }

   const updateTodo = (id,Todo) => {
    setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? Todo : prevTodo)))
   }

   const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((Todo) => Todo.id !== id))
   }

   const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
   }
     useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length>0){
        setTodos(todos)
      }
     },[])

     useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
     },[todos])
   return (
    <Todoprovider value={{todos , addTodo , updateTodo , deleteTodo ,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg  md:min-w-[600px] px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                             <TodoItem todo={todo}/>     
                            </div>
                        ))}
                    </div>
                </div>
            </div>
     </Todoprovider>
  )
}

export default App
