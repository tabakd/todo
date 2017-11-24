import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todos from './todos';
import * as myjson from 'src/data/api/myjson'



const rootReducer = combineReducers({
  todos
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  if (window.location.hash.substring(1)) {
    myjson.update(store.getState().todos)
  } else {
    myjson.create(store.getState().todos)
  }
})




export default store;