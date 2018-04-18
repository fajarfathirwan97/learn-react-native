import { TabNavigator } from 'react-navigation'

import { Colors } from 'themes'
import HomeScreen from './HomeScreen'
import Acordion from './Acordion'

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: Colors.indigo.a700,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    Acordion: {
      screen: Acordion,
      navigationOptions: {
        title: 'Custom Acordion',
        headerStyle: {
          backgroundColor: Colors.indigo.a700,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
  },
  {
    headerMode: 'screen'
  }
)