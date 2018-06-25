import { SETUP_DATA } from './types'
import { Dimensions } from 'react-native'

const setupCompetitionData = async () => {
    const response = await fetch('http://worldcup.sfg.io//teams/group_results')
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