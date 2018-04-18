import { StackNavigator } from 'react-navigation'

import SplashScreen from './SplashScreen'

export default StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    }
  },
  {
    headerMode: 'none'
  }
)