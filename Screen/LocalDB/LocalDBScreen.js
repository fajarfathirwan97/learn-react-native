import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import {
  Text,
} from 'react-native'
import { Container, List, ListItem, Content } from 'native-base'
import sqlite from '../../Config/connection'

export default class LocalDBScreen extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.db()
  }
  async db() {
    const db = new sqlite()
    result = await db.setTable('AssetMaster')
      .select([
        'Description',
        'AssetTypeId',
        'AssetCode',
      ]).get()
    console.log(result, 'res')
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>Local DB Screen</Text>
        </Content>
      </Container>
    )
  }
}