import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import "./App.css"


const App = () => {
  return (
    <main>
      <h2>TODO LIST (REACT + TYPESCRIPT)</h2>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default App