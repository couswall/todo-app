
export const actions = {
    ADD_TODO: '[Todo] Add New To do',
    REMOVE_TODO: '[Todo] Remove To do',
    EDIT_TODO: '[Todo] Edit To do',
    CHECK_TODO: '[Todo] Check To do',
}

export const todoReducer = ( initialState = [], action ) => {
  
    switch( action.type ){

        // Add a new To do
        case actions.ADD_TODO :{
            return [...initialState, action.payload ];
        }

        // Remove To Do
        case actions.REMOVE_TODO: {
            return initialState.filter( todo => todo.id !== action.payload);
        }

        // Check To Do
        case actions.CHECK_TODO: {

            return initialState.map( todo => {

                if ( todo.id === action.payload ) {
                    
                    return {
                        ...todo, 
                        done: !todo.done
                    }
                }

                return todo; 
            }); 
        }

        //Edit To DO 
        case actions.EDIT_TODO: {

            return initialState.map( todo => {

                if ( todo.id === action.payload ) {
                    
                    return {
                        ...todo,
                        description: action.newDescription
                    }
                }

                return todo; 
            })
        }

        
        default: {
            return initialState;
        }

    }

}
