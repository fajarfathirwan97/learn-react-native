/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-fa-icons';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  View,
  Button
} from 'react-native';

export default class Calculator extends Component<{}> {
  aOnPress = (key,active) => {
    for (i = 0; i < this.state.footerMenu.length ; i ++){      
      if(active){
        if (key === i) {
          this.state.footerMenu[i].active = active
        }
        else
          this.state.footerMenu[i].active = !active
      }else{
        if (key === i) {
          this.state.footerMenu[i].active = !active
        }
        else
          this.state.footerMenu[i].active = active        
      }
    }
    this.renderFooter()
  }
  renderFooter = () => {
  footer = [];
    this.state.footerMenu.forEach(function (item,key) {
     if (item.active)
       bgColor = 'red'
     else
       bgColor = 'white'
      footer.push(
        <View key={key} style={[styles.footerButton, { backgroundColor: bgColor}]}>
          <TouchableOpacity onPress={() => this.aOnPress(key, !item.active)}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
            </View>
            <View style={{ flex: 3}}>
              <Text style={{ fontSize: 40, flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                <Icon name={item.icon} />
              </Text>
            </View>
            <View style={{ flex: 3, flexDirection: 'row',  }}>
              <Text style={{ fontSize: 15, flexDirection: 'row', textAlign: 'center', justifyContent: 'center'}}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
      </View>)
    })
    this.setState({menu : footer});
    return footer;
  }

  constructor(props) {
    super(props);
    aOnPress = this.aOnPress.bind(this);
    this.state = {
      flexOrientation: 2,
      menu : [],
      footerMenu : [
        { id: 'home', 'text': 'Home', 'icon': 'home' , 'active' : false},
        { id: 'setting', 'text': 'Setting', 'icon': 'gears', 'active': false },
        { id: 'notification', 'text': 'Notification', 'icon': 'bell', 'active': false },
      ],
      style : {
        flex: { flex: 1},

      }
    }
    this.setFlex = (orientation)=>{
      if (orientation == 'landscape')
        this.setState({flexOrientation : 2})
      else
        this.setState({ flexOrientation: 1})      
    }
    Dimensions.addEventListener('change', () => {
      dimension = Dimensions.get('window')
      orientation = dimension.width > dimension.height ? 'landscape' : 'portrait';
      this.setFlex(orientation)
      this.setState({
        style : {
          flex: {flex: this.state.flexOrientation,},
        } 
      })
    });
  }
  render() {
    return (      
      <View style={{ flex: 1 ,backgroundColor:'#ffffff'}}>
        <View style={{ flex: 8}}>
          <ScrollView>
            <Text>sadsadsadsad </Text>
            <Text>sadsadsadsad </Text>
            <Text>END </Text>
          </ScrollView>
        </View>
        <View style={[this.state.style.flex , styles.footer]}>        
            {this.state.menu}
        </View>
    </View>
    );
  } 
  componentDidMount(){
    this.renderFooter()
  }
} 

var styles = StyleSheet.create({
  footer: {backgroundColor: '#ffffff', flexDirection: 'row' },
  footerButton: { flex: 1, flexDirection: 'row',justifyContent: 'center',}
});