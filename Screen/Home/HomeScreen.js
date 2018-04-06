import React, { Component } from 'react'

import {
  Text,
  TouchableOpacity,
} from 'react-native'
import { Container, List, ListItem, Content } from 'native-base'

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Acordion')} style={{ flex: 1 }}>
                <Text>Acordion</Text>
              </TouchableOpacity>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}