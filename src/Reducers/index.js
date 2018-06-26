import { combineReducers } from 'redux'
import HomeReducer from './HomeScreenReducer'
import LoginReducer from './LoginScreenReducer'
import TeamPickerReducer from './TeamPickerReducer'

export default combineReducers({
    home: HomeReducer,
    login: LoginReducer,
    teamPicks: TeamPickerReducer
})