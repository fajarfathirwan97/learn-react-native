import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import { Container, List, ListItem, Content } from 'native-base'
import * as NavigatorHelper from '../../CustomLib/NavigatorHelper'
import { getToken } from '../../CustomLib/AsyncStorage'
import sqlite from '../../Config/connection';
import Home from "../Home";
export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.checkAsyncStorage()
    }, 1000)
    this.populateDb()
  }
  async populateDb() {
    db = new sqlite()
    // await db.populateDb()
    // await db.populateSeed()
    // result = await db.setTable('AssetMaster')
    //   .select([
    //     'Description',
    //     'AssetTypeId',
    //     'AssetCode',
    //   ]).get()
  }
  async checkAsyncStorage() {
    token = await getToken()
    if (token) {
      NavigatorHelper.reset(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' })
        ]
      }))
    }
    else {
      NavigatorHelper.reset(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Login' })
        ]
      }))
    }
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