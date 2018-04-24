import { TabNavigator, StackNavigator } from 'react-navigation'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { Colors } from '../../Themes'
import HomeScreen from './HomeScreen'
import Acordion from './Acordion'
import { Button } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = StackNavigator(
  {
    Home: {
      screen: TabNavigator({
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
          },
        },
        Acordion: {
          screen: Acordion,
          navigationOptions: {
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            },
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
      }, {
        headerMode: 'screen',
        lazy: true,
        tabBarOptions: {
          tabStyle: {
            backgroundColor: Colors.indigo.a700
          }
        },
      })
    }
  }, {
    headerMode: 'none',
  }
)

class TabBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
          style={{
            position: 'absolute',
            zIndex: 1000,
            minHeight: 54,
            top: 0,
            paddingTop: 54 / 4,
            paddingLeft: 5,
            left: 0,
          }}>
          <FontAwesome color='white' size={20} style={{ textAlignVertical: 'center' }} name='navicon' />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Tab />
        </View>
      </View>
    )
  }
}

export default TabBar