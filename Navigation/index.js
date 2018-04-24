import React, { Component } from 'react'
import { DrawerNavigator, NavigationActions, StackNavigator } from 'react-navigation'
// import { AsyncStorage } from 'react-native'
import { Home, Login, SplashScreen, LocalDBScreen } from '../Screen/'
import redux from '../Redux'
import { Provider } from 'react-redux'
import { View } from 'native-base'
import Toast from '../Components/Toast'
import * as NavigatorHelper from '../CustomLib/NavigatorHelper'

let Navigation = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    Home: {
      screen: DrawerNavigator({
        Home: { screen: Home }
      }),
    },
    Login: {
      screen: Login,
    }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none'

  }
)

export default class index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
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