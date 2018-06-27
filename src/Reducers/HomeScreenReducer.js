import { SETUP_DATA, UPDATE_SCORE } from "../Actions/types"

const INITIAL_STATE = {
    groups: [],
    width: '',
    score: 0
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SETUP_DATA:
            return {...state, groups: action.payload.fifaData, width: action.payload.width}
        case UPDATE_SCORE:
            console.log('this is reducer ' + action.payload)
            return {...state, score: action.payload}
        default:
            return state
    }
}
