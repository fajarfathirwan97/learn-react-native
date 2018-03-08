/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';

export default class Acordion extends Component<{}> {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
    this.state = {
      isChildVisible: false,
    }
  }
  animate(val) {
    this.animatedValue.setValue(val)
    Animated.timing(
      this.animatedValue,
      {
        toValue: !val,
        duration: 250,
      }
    ).start(Easing.linear)
  }
  onLayout = (event) => {
    console.log(event);
  }
  render() {
    const minHeight = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50]
    })
    return (
      <Animated.View style={{ minHeight, flex: 0, backgroundColor: '#f3f3f3', justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ isChildVisible: !this.state.isChildVisible })
            this.animate(this.state.isChildVisible ? 1 : 0)
            this.props.onPress()
          }}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 30, textAlignVertical: 'center' }}>{this.props.title}</Text>
          <Text style={{ fontSize: 50, textAlignVertical: 'center' }}>{this.props.rightTitle}</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            minHeight,
            backgroundColor: 'blue',
            display: this.state.isChildVisible && this.props.visible ? 'flex' : 'none',
            justifyContent: 'center'
          }}>
          {
            this.props.children ? this.props.children : <Text> this.props.label</Text>
          }
        </Animated.View>
      </Animated.View >
    );
  }
}

