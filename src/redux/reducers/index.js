import countReducer from './counter'
import loggedReducer from './isLogged'
import afazeresReducer from './afazeres'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: countReducer,
    isLogged: loggedReducer,
    afazeres: afazeresReducer 
})

export default allReducers
