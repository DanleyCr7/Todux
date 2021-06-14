import {combineReducers} from 'redux';
import todosReducers from './reducers/todosReducers'
export default combineReducers({
    todos: todosReducers
})