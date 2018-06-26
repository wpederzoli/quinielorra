import { PICK_TEAM, UNPICK_TEAM, UNPICK_GROUP } from './types'

export const pickTeam = (group, team, teams) => {
    let teamsArray = teams[group]
    console.log('this is teamsarr = ' + teamsArray)
    console.log('this is teamsArr index of ' + team + ' ' + teamsArray.indexOf(team))
    console.log('this is teamsArr length ' + teamsArray.length)
    if (teamsArray.indexOf(team) === -1 && teamsArray.length < 2) {
        console.log('this is true ')
        return {
            type: PICK_TEAM,
            payload: {
                group,
                team
            }
        }
    }else if(teamsArray.indexOf(team) !== -1){
        const index = teamsArray.indexOf(team)
        const newTeams = teamsArray.splice(index, 1)
        
        if(teamsArray.length === 0){
            return{
                type: UNPICK_GROUP,
                payload: group
            }
        }

        return{
            type: UNPICK_TEAM,
            payload:{
                group,
                teams: teamsArray[0] 
            }
        }
    }else{
        return{
            type: 'hola'
        }
    }
}