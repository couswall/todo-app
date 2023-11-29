import { Item } from "./Item"

export const ListItems = ( { todos = [], onHandleDeleteTodo, onCheckTodo, onEditTodo } ) => {
  return (
    <ul>
        {
            todos.map( todo => (
                <Item 
                  key={ todo.id } 
                  todo = { todo }
                  onHandleDeleteTodo = { onHandleDeleteTodo }
                  onCheckTodo = { onCheckTodo }
                  onEditTodo = { onEditTodo }
                />
            )) 
        }
    </ul>
  )
}
