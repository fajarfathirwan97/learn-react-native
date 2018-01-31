import React, { Component } from "react";
import LinearGradient from 'react-native-linear-gradient'
import {
  TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';

export default class RoundButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      style : {
        roundButton: { backgroundColor: '#63C5D1', borderRadius: 30, margin: 20,padding: 10 },
      },
      placeholder : props.placeholder,
      onPress : props.onPress,
      text : props.text
    }
  }
  render(){
    if (typeof this.state.text === 'string'){
      renderText = (
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
            {this.state.text}
          </Text>
      );
    }
    else
      renderText = this.state.text ;
    return(
      <LinearGradient 
      style={this.state.style.roundButton} 
      start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
      locations={[0, 1]}
        colors={['#5861A9','#5971E9']}>
        <TouchableOpacity onPress={this.props.onPress}>
          {renderText}
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}