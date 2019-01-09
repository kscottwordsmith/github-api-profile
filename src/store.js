import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/profile'
import reposReducer from './reducers/repos'

//have to reduce two things, need combineReducers
const rootReducer = combineReducers({
    profileReducer,
    reposReducer
})

//sets store to the combined profileReducer and reposReducer
const store = createStore(rootReducer)

export default store