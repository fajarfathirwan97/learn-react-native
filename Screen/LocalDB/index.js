import { StackNavigator } from 'react-navigation'

import LocalDBScreen from './LocalDBScreen'
import { Colors } from '../../Themes'

export default StackNavigator(
  {
    LocalDbScreen: {
      screen: LocalDBScreen
    }
  },
  {
    navigationOptions: {
      title: 'Local DB',
      headerStyle: {
        backgroundColor: Colors.indigo.a700,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)