import Immutable from 'seamless-immutable';
import * as myjson from 'src/data/api/myjson';

const CREATE_TODO = 'CREATE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const LOAD_TODOS = 'LOAD_TODOS';

const uniqueId = () => Math.random().toString(36).substring(2) 
+ (new Date()).getTime().toString(36);


export const createTodo = (todoText) => ({
    type: CREATE_TODO,
    todo: {id: uniqueId(), completed: false, text: todoText}
})

export const updateTodo = (id, updates) => ({
    type: UPDATE_TODO,
    id, updates
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const loadTodos = (todos) => ({
    type: LOAD_TODOS,
    todos
})

export const loadTodosFromMyJson = () => (dispatch) => {
    myjson.get().then(todos => {
        if (todos.bins) return;
        dispatch(loadTodos(todos))
    })
}



export default function(state=Immutable({}), action) {
    switch(action.type) {
        case CREATE_TODO:
            return state.set(action.todo.id, action.todo);
        case UPDATE_TODO:
            const todo = state[action.id].merge(action.updates);
            return state.set(action.id, todo);
        case DELETE_TODO:
            return state.update(action.id, undefined);
        case LOAD_TODOS:
            return Immutable(action.todos);
        default:
            return state;
    }
}


export const getTodos = state => Object.values(state).filter(todo => !todo.completed).reverse()
export const getCompletedTodos = state => Object.values(state).filter(todo => todo.completed).reverse()