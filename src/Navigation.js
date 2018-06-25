import { createStackNavigator } from 'react-navigation'

import HomeScreen from './Screens/Home'

const Router = createStackNavigator({
    Home:{
        screen: HomeScreen
    }
})

export default Router