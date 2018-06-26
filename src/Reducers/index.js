import { combineReducers } from 'redux'
import HomeReducer from './HomeScreenReducer'
import LoginReducer from './LoginScreenReducer'

export default combineReducers({
    home: HomeReducer,
    login: LoginReducer
})