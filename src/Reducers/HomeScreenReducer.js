import { SETUP_DATA } from "../Actions/types"

const INITIAL_STATE = {
    groups: [],
    width: ''
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SETUP_DATA:
            return {...state, groups: action.payload.fifaData, width: action.payload.width}
        default:
            return state
    }
}
