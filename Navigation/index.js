import React, { Component } from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { Home, Login } from "../Screen/";
import redux from "../Redux";
import rootSaga from "../Saga";
import { Provider } from "react-redux";

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
);

export default class index extends Component {
  render() {
    // console.log(redux(),'sadsa')
    return (
      <Provider store={redux()}>
        <Navigation />
      </Provider>
    )
  }
}