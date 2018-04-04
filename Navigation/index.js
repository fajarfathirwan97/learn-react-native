import React, { Component } from 'react'
import { DrawerNavigator } from 'react-navigation'
import { Home, Login } from '../Screen/'
import redux from '../Redux'
import { Provider } from 'react-redux'
import { Text, View } from 'native-base'
import { Metrics } from '../Themes'
import Toast from '../Components/Toast'

let Navigation = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
      }
    }
  },
  {
    initialRouteName: 'Login',
  }
)

export default class index extends Component {
  render() {
    return (
      <Provider store={redux()}>
        <View style={{ flex: 1 }}>
          <Navigation />
          <Toast/>
        </View>
      </Provider>
    )
  }
}