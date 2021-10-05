import { combineReducers } from 'redux';

import { todoList } from './todoReducer';

const rootReducer = combineReducers({
	todoList,
})

export default rootReducer;