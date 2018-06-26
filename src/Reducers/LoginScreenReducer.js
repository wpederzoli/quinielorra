import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_FAIL } from "../Actions/types"

const INITIAL_STATE = {
    email: '',
    password: '',
    loginError: false,
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_FAIL:
            return {...state, loginError: true}
        default:
            return state
    }
}