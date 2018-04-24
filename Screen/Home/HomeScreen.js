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
              <TouchableOpacity style={{ flex: 1 }}>
                <Text>DB LOCAL</Text>
              </TouchableOpacity>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}