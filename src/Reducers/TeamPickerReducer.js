import { PICK_TEAM, UNPICK_TEAM, UNPICK_GROUP } from "../Actions/types"

const INITIAL_STATE = {
    teams: {
        "A":[],
        "B":[],
        "C":[],
        "D":[],
        "E":[],
        "F":[],
        "G":[],
        "H":[]
    }
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case PICK_TEAM:
            return {...state, teams:{...state.teams, [action.payload.group]:[...state.teams[action.payload.group], action.payload.team]} }
        case UNPICK_TEAM:
            return {...state, teams: {...state.teams, [action.payload.group]:[action.payload.teams]} }
        case UNPICK_GROUP:
            return {...state, teams: {...state.teams, [action.payload]: []} }
        default:
            return state
    }
}