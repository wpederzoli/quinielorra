import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL } from "./types"
import firebase from 'firebase'

export const emailChanged = (email) =>{
    return{
        type: EMAIL_CHANGED,
        payload: email
    }
}

export const passwordChanged = (password) =>{
    return{
        type: PASSWORD_CHANGED,
        payload: password
    }
}

export const submit = ({ email, password, navigation }) =>{
    return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type: LOGIN_SUCCESS })
                console.log('this is running still')
                navigation.navigate('Home')
            })
            .catch(e => {
                console.log('creating new user')
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        dispatch({ type: LOGIN_SUCCESS })
                        navigation.navigate('Home')
                    })
                    .catch(e => {
                        console.log(e)
                        dispatch({ type: LOGIN_FAIL })
                    })
            })
    }
}

export const isUserLogedIn = (navigation) =>{
    firebase.auth().onAuthStateChanged(user =>{
        if(user){
            navigation.navigate('Home')
        }
    })
}
