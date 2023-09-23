import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


const App = () => {
  return (
    <main>
      <h1>TODO LIST (REACT + TYPESCRIPT)</h1>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default App