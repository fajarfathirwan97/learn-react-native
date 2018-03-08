import React, { Component } from "react";
import { getKey } from "../Lang";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  Modal,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Alert,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Carousel from "react-native-snap-carousel";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class ShopingHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
        { src: 'https://via.placeholder.com/200x150' },
      ]
    }
  }
  _renderItem({ item, key }) {
    return (<Image
      style={{ flex: 1, minHeight: 200, minWidth: 300, }}
      resizeMode='stretch'
      source={{ uri: item.src }} />
    )
  }
  render() {
    const imageWidth = Math.round(Dimensions.get('screen').width * 0.31)
    return (
      <ScrollView contentContainerStyle={{
        minHeight: 200,
        maxHeight: Dimensions.get('window').width,
        flex: 0,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <TouchableOpacity style={{ flex: 0, borderRadius: 5 }}>
          <View style={{ borderRadius: 5 }}>
            <ImageBackground
              style={{ flex: 0, borderRadius: 5, minWidth: imageWidth, minHeight: imageWidth, borderRadius: 5 }}
              source={{ uri: `https://via.placeholder.com/${imageWidth}x${imageWidth}` }} >

              <Text style={{
                maxHeight: imageWidth,
                fontSize: 20,
                flexWrap: 'wrap',
                padding: 10,
                fontWeight: '400',
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'flex-start',
                maxWidth: imageWidth,
                color: 'white',
                textAlignVertical: 'bottom',
              }}>CATEGORY NAME</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 0, borderRadius: 5 }}>
          <View style={{ borderRadius: 5 }}>
            <ImageBackground
              style={{ flex: 0, borderRadius: 5, minWidth: imageWidth, minHeight: imageWidth, borderRadius: 5 }}
              source={{ uri: `https://via.placeholder.com/${imageWidth}x${imageWidth}` }} >

              <Text style={{
                maxHeight: imageWidth,
                fontSize: 20,
                flexWrap: 'wrap',
                padding: 10,
                fontWeight: '400',
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'flex-start',
                maxWidth: imageWidth,
                color: 'white',
                textAlignVertical: 'bottom',
              }}>CATEGORY NAME</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 0, borderRadius: 5 }}>
          <View style={{ borderRadius: 5 }}>
            <ImageBackground
              style={{ flex: 0, borderRadius: 5, minWidth: imageWidth, minHeight: imageWidth, borderRadius: 5 }}
              source={{ uri: `https://via.placeholder.com/${imageWidth}x${imageWidth}` }} >

              <Text style={{
                maxHeight: imageWidth,
                fontSize: 20,
                flexWrap: 'wrap',
                padding: 10,
                fontWeight: '400',
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'flex-start',
                maxWidth: imageWidth,
                color: 'white',
                textAlignVertical: 'bottom',
              }}>CATEGORY NAME</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}