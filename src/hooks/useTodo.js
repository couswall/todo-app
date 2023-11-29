import { actions, todoReducer  } from "../helpers/todoReducer";
import { useEffect, useReducer } from "react";


// const initialState = [
//     {
//         id: 1,
//         description: 'Lavar trastes',
//         done: false
//     },
//     {
//         id: 2,
//         description: 'Sacar ropa de lavadora',
//         done: false
//     }
// ]

const init = () => {
    
    // if there are not todos, todos will be an empty array
    return JSON.parse( localStorage.getItem('todos' )) || []; 
}


export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {

        localStorage.setItem( 'todos', JSON.stringify ( todos ) ) ;

    }, [todos])

    // Add a to do function
    const onHandleAddTodo = ( todo ) => {

        const action = {
            type: actions.ADD_TODO,
            payload: todo
        }

        dispatch( action );
    }


    // Delete To Do
    const onHandleDeleteTodo = ( id ) => {

        const action = {
            type: actions.REMOVE_TODO,
            payload: id 
        }

        dispatch( action );

    }

    // Check To DO 
    const onCheckTodo = ( id ) => {

        const action = {
            type: actions.CHECK_TODO,
            payload: id,
        }

        dispatch( action );
    }


    // Edit To Do
    const onEditTodo = ( id, newDescription ) => {
        
        const action = {
            type: actions.EDIT_TODO,
            payload: id,
            newDescription, 
        }

        dispatch( action );
    }


    return {
        todos, 
        onHandleAddTodo,
        onHandleDeleteTodo,
        onCheckTodo,
        onEditTodo
    }
}
