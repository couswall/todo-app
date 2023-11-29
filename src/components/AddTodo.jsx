import { useForm } from "../hooks/useForm"

export const AddTodo = ({ onHandleAddTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) return;


        const newTodo = {
            id: new Date().getTime() * 3,
            description: description.trim(),
            done: false,
        }

        onHandleAddTodo && onHandleAddTodo( newTodo );

        onResetForm();
    }

  return (

    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            placeholder="Add a new To do" 
            className="input-todo"
            name="description"
            value={ description }
            onChange={ onInputChange }
        />

        <button className="add-btn">Add</button>
    </form>

    )
}
