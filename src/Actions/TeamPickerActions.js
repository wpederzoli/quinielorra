import { PICK_TEAM, UNPICK_TEAM, UNPICK_GROUP, SUBMIT_TEAMS, SUBMIT_FAIL, SELECTED_TEAMS } from './types'
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

export const submitTeams = (teams, navigation) => {
    const valid = validateTeams(teams)
    if (valid) {
        const uid = firebase.auth().currentUser.uid

        postToDB(teams, uid, navigation)
    } else {
        alert('Pick 2 teams from each group!')
        return {
            type: SUBMIT_FAIL
        }
    }
}

const postToDB = async (teams, uid, navigation) => {

    await firebase.database().ref('teams/' + uid).set({
        ...teams
    })

    navigation.navigate('Home')

    return {
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

export const checkForPickedTeams = (navigation) => {
    return async (dispatch) => {
        const uid = firebase.auth().currentUser.uid
        const db = await getFromDB(uid)
        if (db !== null) {
            navigation.navigate('Home')
            dispatch({
                type: SELECTED_TEAMS,
                payload: db
            })
        }else{
            dispatch({ type: 'default' })
        }
    }
}

const getFromDB = async (uid) => {
    const db = await firebase.database().ref('/teams/' + uid).once('value')
    return db
}