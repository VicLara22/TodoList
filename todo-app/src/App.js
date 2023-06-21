import { useEffect, useState } from "react";
import { Title } from "./components/Title/Title";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {

const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Estudiar 2 horas",
    completed: false,
  },
  {
    id: 2,
    title: "Limpiar los platos",
    completed: false,
  },
  {
    id: 3,
    title: "Ir al gimnasio",
    completed: false,
  },
  {
    id: 4,
    title: "Leer un capitulo de libro",
    completed: false,
  },
])

const [activeFilter, setActiveFilter] = useState('all')
const [filteredTodos, setFilteredTodos] =useState(todos)
const addTodo = (title) => {
  const lastId = todos.length > 0 ? todos[todos.length -1].id : 1;
  
  const newTodo = {
    id: lastId + 1,
    title,
    completed:false,
  }

  const todoList = [...todos]
  todoList.push(newTodo);
  setTodos(todoList);
}

const handleSetComplete = (id) => {
  const updateList = todos.map(todo => {
    if( todo.id === id) {
      return { ...todo, completed: !todo.completed}
    }
    return todo;
  })
  setTodos(updateList)
}

const handleDelete = (id) => {
  const updateList = todos.filter(todo => todo.id !== id)
  setTodos(updateList)
}

const handleClearComplete = () => {
  const updatedList = todos.filter(todo => !todo.completed);
  setTodos(updatedList);
};

const showAllTodos = () => {
  setActiveFilter('all')
}
const showActiveTodos = () => {
  setActiveFilter('active')
}
const showCompletedTodos = () => {
  setActiveFilter('completed')
}
useEffect (() => {
   if(activeFilter === 'all'){
    setFilteredTodos(todos)
   } else if (activeFilter === 'active'){
    const activeTodos = todos.filter( todo => todo.completed === false)
    setFilteredTodos(activeTodos)
   } else if( activeFilter === 'completed'){
    const completedTodo = todos.filter( todo => todo.completed === true)
    setFilteredTodos(completedTodo)
   }
}, [activeFilter, todos])
  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px5">
     <div className="container flex flex-col max-w-xl">
      <Title/>
      <TodoInput addTodo={addTodo}/>
      <TodoList 
           activeFilter={activeFilter}
           todos={filteredTodos}
           showAllTodos={showAllTodos}
           showActiveTodos={showActiveTodos}
           showCompletedTodos={showCompletedTodos}
           handleSetComplete={handleSetComplete}
           handleDelete={handleDelete}
           handleClearComplete={handleClearComplete} />
  
     </div>
    </div>
  );
}

export default App;
