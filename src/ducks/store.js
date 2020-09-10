//import the redux functions, middleware, and reducers that will be used to create a store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'
import userReducer from './userReducer'


//using combine reducers to combine reducers into a single, root reducer that will be used by the store.  Eventually you may have multiple reducers in an application, and this helps us combine those into one root reducer that can be used to create a store
const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

//create the store using createStore function. passing in rootReducer, applyMiddleware(promiseMiddleware)
//it is being exported so it can be used by components in the future
export default createStore(rootReducer, applyMiddleware(promiseMiddleware))