import React, { Component } from "react";
import {
  TextInput,
} from 'react-native';

export default class RoundTextInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      style : {
        textInput: {  backgroundColor: '#fff', borderRadius: 30, margin: 20,padding: 10, },
      },
      placeholder : props.placeholder,
      placeholderTextColor: props.placeholderTextColor,
      onChangeText: props.onChangeText,
    }
  }

  render(){
    return(
      <TextInput
        placeholder={this.state.placeholder}
        underlineColorAndroid='transparent'
        textAlign='center'
        onChangeText={this.state.onChangeText}
        placeholderTextColor={this.state.placeholderTextColor}
        style={this.state.style.textInput} />
    )
  }
}