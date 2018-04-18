import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import { Container, List, ListItem, Content } from 'native-base'
import * as NavigatorHelper from '../../CustomLib/NavigatorHelper'
import { getToken } from '../../CustomLib/AsyncStorage'

export default class HomeScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.checkAsyncStorage()
    }, 1000);
  }
  async checkAsyncStorage() {
    token = await getToken()
    if (token)
      NavigatorHelper.navigate(NavigationActions.navigate({ routeName: 'Home' }))
    else
      NavigatorHelper.navigate(NavigationActions.navigate({ routeName: 'Login' }))
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>Splash Screen</Text>
        </Content>
      </Container>
    )
  }
}