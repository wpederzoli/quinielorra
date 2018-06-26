import { createStackNavigator } from 'react-navigation'

import HomeScreen from './Screens/Home'
import LoginScreen from './Screens/Login'

const Router = createStackNavigator({
    Login:{
        screen: LoginScreen
    },
    Home:{
        screen: HomeScreen
    }
})

export default Router