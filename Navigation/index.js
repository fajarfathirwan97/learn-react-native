import React, { Component } from 'react'
import { DrawerNavigator, NavigationActions } from 'react-navigation'
// import { AsyncStorage } from 'react-native'
import { Home, Login, SplashScreen } from '../Screen/'
import redux from '../Redux'
import { Provider } from 'react-redux'
import { View } from 'native-base'
import Toast from '../Components/Toast'
import * as NavigatorHelper from '../CustomLib/NavigatorHelper'

let Navigation = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null        
      }
    }
  },
  {
    initialRouteName: 'SplashScreen',
  }
)

export default class index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    NavigatorHelper.setNavigator(this.nav)
  }
  render() {
    return (
      <Provider store={redux()}>
        <View style={{ flex: 1 }}>
          <Navigation ref={(nav) => { this.nav = nav }} />
          <Toast />
        </View>
      </Provider>
    )
  }
}