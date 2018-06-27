import { SETUP_DATA, UPDATE_SCORE } from './types'
import { Dimensions } from 'react-native'
import { API_URL } from '../Constants'

const setupCompetitionData = async () => {
    const response = await fetch(`${API_URL}/teams/group_results`)
    const data = await response.json()
    return data
}

const setupDimensions = () =>{
    return Dimensions.get('window').width
}

export const setup = () =>{
    return async(dispatch) =>{
       const fifaData = await setupCompetitionData()
       const width = setupDimensions()
       dispatch({
           type: SETUP_DATA,
           payload: { fifaData, width }
       })
    }
}

export const getScore = ({ groups, teams }) =>{

    let points = 0
    const letters = Object.keys(teams)

    groups.map(group =>{
        group.ordered_teams.map(team => {
            const index = group.ordered_teams.indexOf(team)
            letters.map(letter =>{
                Object.values(teams[letter]).map(prediction =>{
                    if(team.country === prediction && index === teams[letter].indexOf(prediction)){
                        points = points + 2
                    }
                })
            })
        })       
    })

    console.log('this is payload : ' + points)
    return{
        type: UPDATE_SCORE,
        payload: points
    }
}