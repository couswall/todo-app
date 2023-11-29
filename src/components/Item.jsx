import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useForm } from "../hooks/useForm";

export const Item = ( { todo, onHandleDeleteTodo, onCheckTodo, onEditTodo } ) => {
  
    const { description, onInputChange } = useForm({
        description: todo.description
    })

    const [ isEditing, setIsEditing ] = useState( false );

    const onHandleEditBtn = ( id, newDescription ) => {
        if ( isEditing ) {
            if ( newDescription.trim().length <= 1) return;
            onEditTodo && onEditTodo( id, newDescription.trim() );
        }
        setIsEditing( !isEditing );
    }

    const onhandleSubmit = (e) => {
        e.preventDefault();
        onHandleEditBtn( todo.id, description );
    }
  
    return (

    <li>
        <div className="name-todo-container">
            
            <input 
                type="checkbox"
                onChange={ () => onCheckTodo( todo.id ) } 
                checked = { (todo.done) ? true : false}
            />
            
            {
                ( isEditing ) 
                    ? <form onSubmit={ onhandleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            value={ description }
                            onChange={ onInputChange }
                         />
                      </form>
                    
                    :<p className= { (!todo.done) ? '' : 'todo-done'} >
                        { todo.description }
                    </p>
            }

        </div>
        
        <div className="icon-container">
            <BiSolidEdit 
                className="icon"
                onClick={ () => onHandleEditBtn( todo.id, description ) }
            />
            
            <FaRegTrashAlt 
                className="icon"
                onClick={() => onHandleDeleteTodo( todo.id )}

            />
        </div>
    </li>

    )
}
