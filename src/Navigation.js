import { createStackNavigator } from 'react-navigation'

import HomeScreen from './Screens/Home'
import LoginScreen from './Screens/Login'
import TeamPickerScreen from './Screens/TeamPicker'

const Router = createStackNavigator({
    Login:{
        screen: LoginScreen
    },
    Home:{
        screen: HomeScreen
    },
    TeamPicker:{
        screen: TeamPickerScreen
    }
})

export default Router