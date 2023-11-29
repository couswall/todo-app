import { AddTodo, ListItems } from "./components";
import { useTodo } from "./hooks/useTodo";


export const App = () => {

    const { todos, onHandleAddTodo, onHandleDeleteTodo, onCheckTodo, onEditTodo } = useTodo();


  return (

    <>

        <section className="container">
            <article className="title-container">
                <h1>To do App</h1>
                <div className="title-bottom"></div>
            </article>

            <AddTodo onHandleAddTodo = { onHandleAddTodo } />

            <article className="todo-content">
                
                <ListItems 
                    todos = { todos }
                    onHandleDeleteTodo = { onHandleDeleteTodo }
                    onCheckTodo = { onCheckTodo }
                    onEditTodo = { onEditTodo }
                />

            </article>



        </section>

    </>

    )
}
