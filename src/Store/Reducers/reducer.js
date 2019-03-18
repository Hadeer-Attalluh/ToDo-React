export const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'Add_ToDo':
            return { ...state, todos: [...state.todos, action.data] };
        // case 'Delete_ToDo':
        //     return {...state,todos:[...state.todos.indexOf()]};
        case 'Complete_ToDo':
            debugger;
            const taskIndex = state.todos.findIndex(task => task.id === action.id);
            const newTodos = state.todos.slice();
            newTodos[taskIndex].complete = true;
            return { ...state, todos: newTodos };
        case 'Uncomplete_ToDo':
        debugger;
            const taskIndex1 = state.todos.findIndex(task => task.id === action.id);
            const newTodos1 = state.todos.slice();
            newTodos1[taskIndex1].complete = false;
            return { ...state, todos: newTodos1 };
        default:
            return state;
    }
};