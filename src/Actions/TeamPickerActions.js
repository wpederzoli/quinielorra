import { PICK_TEAM, UNPICK_TEAM, UNPICK_GROUP, SUBMIT_TEAMS, SUBMIT_FAIL } from './types'
import firebase from 'firebase'

export const pickTeam = (group, team, teams) => {
    let teamsArray = teams[group]

    if (teamsArray.indexOf(team) === -1 && teamsArray.length < 2) {
        return {
            type: PICK_TEAM,
            payload: {
                group,
                team
            }
        }
    } else if (teamsArray.indexOf(team) !== -1) {
        const index = teamsArray.indexOf(team)
        const newTeams = teamsArray.splice(index, 1)

        if (teamsArray.length === 0) {
            return {
                type: UNPICK_GROUP,
                payload: group
            }
        }

        return {
            type: UNPICK_TEAM,
            payload: {
                group,
                teams: teamsArray[0]
            }
        }
    } else {
        return {
            type: 'default'
        }
    }
}

export const submitTeams = (teams) =>{
    const valid = validateTeams(teams)
    if(valid){
        const uid = firebase.auth().currentUser.uid
        console.log('this is uid ' + uid)
        postToDB(teams, uid)
    }else{
        alert('Pick 2 teams from each group!')
        return{
            type: SUBMIT_FAIL
        }
    }
}

const postToDB = async(teams, uid) =>{
    console.log('this is uid: ' + uid)
    console.log('this is teams ' + JSON.stringify(teams))
    await firebase.database().ref('teams/' + uid).set({
        ...teams
    })
    console.log('success')
    return{
        type: SUBMIT_TEAMS
    }
}

const validateTeams = (teams) => {
    let valid = true

    Object.keys(teams).map((key, id) => {
        if (teams[key].length !== 2) {
            valid = false
        }
    })

    return valid
}