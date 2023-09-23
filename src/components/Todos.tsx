import { useTodos } from "../store/todos";


const Todos = () => {

  const {todos,toggleTodoAsComplete,handleDeleteTodo} = useTodos();
  const filterData = todos;
  return (
    <ul>
      {
        filterData.map((todo)=>{
          return (
            <li key={todo.id}>
              <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=> toggleTodoAsComplete(todo.id)}/>
              <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
              {
                todo.completed && (
                  <button type="button" onClick={()=>handleDeleteTodo(todo.id)}>Detele</button>
                )
              }
            </li>
          )
        })
      }
    </ul>
  )
};

export default Todos;
