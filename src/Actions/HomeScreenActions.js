import { SETUP_DATA } from './types'

export const setupCompetitionData = () =>{
    return async(dispatch) =>{
        const response = await fetch('https://api.fifa.com/api/v1/calendar/matches?idseason=254645&idcompetition=17&language=en-GB&count=100')
        const data = await response.json()
        dispatch({
            type: SETUP_DATA,
            payload: data
        })
    }
}