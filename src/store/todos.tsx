   
import {ReactNode,createContext,useContext , useState} from "react";

 type TodoProviderProps ={
    children : ReactNode
}

type Todo ={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date
}
type TodoContext={
    todos:Todo[];
    handleTodo:(task:string)=> void;
    toggleTodoAsComplete: (id:string) =>void;
    handleDeleteTodo:(id:string)=> void
}


export const todoContext = createContext<TodoContext | null>(null)


export const  TodoProvider =({children}:TodoProviderProps)=>{
    const [todos , setTodos] = useState<Todo[]>([])

       const handleTodo =(task:string)=>{
        setTodos((prev)=>{
             const newTodo:Todo[] =[{
                id:Math.random().toString(),
                task:task,
                completed:false,
                createdAt:new Date()
             }, ...prev]
             return newTodo
        })

       }
       const toggleTodoAsComplete =(id: string)=>{
           setTodos((prev)=>{
               let newTodos = prev.map((todo)=>{
                if(todo.id === id){
                    return {...todo, completed:!todo.completed}
                }
                return todo
               })
               return newTodos
           })
       }
       const handleDeleteTodo=(id:string)=>{
                setTodos((prev)=>{
                    let newTodos = prev.filter((todo)=>{
                        return todo.id !== id
                    })
                    return  newTodos;
                })
                

       }
        return <todoContext.Provider value={{todos, handleTodo,toggleTodoAsComplete,handleDeleteTodo}}>
            {children}
        </todoContext.Provider>
}


export const useTodos = ()=>{
    const todosConsumer = useContext(todoContext);

    if(!todosConsumer){
        throw new Error("useTodos used outside of provider")
    }
    return todosConsumer;

}