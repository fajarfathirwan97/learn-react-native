import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Animated,
  ScrollView,
  Image,
  TextInput,
  Modal,
  ActivityIndicator,
  Dimensions,
  Alert,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.navHeight = new Animated.Value(this.props.navHeight)
    this.initalScroll = 0
    this.height = 0
  }
  handleOnScroll(event) {
    const { nativeEvent } = event
    dir = this.initalScroll > nativeEvent.contentOffset.y ? 'up' : 'down'
    if (nativeEvent.contentOffset.y == 0) {
      this.height = this.props.navHeight
    }
    if (dir == 'up' && this.height < this.props.navHeight) {
      this.height += this.props.navHeight * 0.25
    }
    else if (dir == 'down' && this.height >= 0) {
      this.height -= this.props.navHeight * 0.25
    }
    this.hideNav()
    this.initalScroll = nativeEvent.contentOffset.y
  }
  hideNav() {
    Animated.timing(
      this.navHeight,
      {
        toValue: this.height,
        duration: 250,
      }
    ).start()
  }
  render() {
    const height = this.navHeight.interpolate({
      inputRange: [0, this.props.navHeight],
      outputRange: [0, this.props.navHeight]
    })

    return (
      <Animated.View style={{ height, backgroundColor: 'black' }} />
    )
  }
}

export default class HideNav extends Component {
  constructor(props) {
    super(props)
    this.initalScroll = 0
    this.state = {
      height: 138,
      nativeEvent: {}
    }
  }


  handleOnScroll(event) {
    const { nativeEvent } = event
    dir = this.initalScroll > nativeEvent.contentOffset.y ? 'up' : 'down'
    this.initalScroll = nativeEvent.contentOffset.y
    // if (nativeEvent.contentOffset.y == 0) {
    //   this.height = 138
    // }
    // if (dir == 'up' && this.height < 138) {
    //   this.height += 1.5
    // }
    // else if (dir == 'down' && this.height >= 0) {
    //   this.height -= 1.5
    // }
    // this.hideNav()
  }
  render() {
    // const height = this.nav.interpolate({
    //   inputRange: [0, 138],
    //   outputRange: [0, 138]
    // })
    return (
      <View>
        <Navbar ref='navbar' navHeight={this.state.height} />
        <ScrollView
          onScroll={(nativeEvent) => { this.refs.navbar.handleOnScroll(nativeEvent) }}>
          <View style={{ height: 1000, justifyContent: 'space-between' }}>
            <Text style={{ textAlignVertical: "top" }}>end</Text>
            <Text style={{ textAlignVertical: "bottom", alignItems: 'flex-end' }}>end</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}