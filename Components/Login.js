import React , { Component } from "react";
import RoundTextInput from './RoundTextInput';
import RoundButton from './RoundButton';
import LinearGradient from 'react-native-linear-gradient'
import APIService from '../CustomLib/APIService'
import CustomModal from './CustomModal'
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
  Alert,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
export default class Login extends Component {
  constructor(props){
    super(props)
    login = this.login.bind(this)
    setValue = this.setValue.bind(this)
    this.state = {
      style : {
        main: { flex: 1,},
        logo: { flex: 1, justifyContent: 'center', alignItems: 'center',},
        form: { flex: 2, margin: 20,},
        logoImage : {height: 150, width: 200,resizeMode : Image.resizeMode.contain},
      },
      form :{
        username:'',
        password:''
      },
      modalVisibility: false,
      modalView: null,
    }
  }
  setValue = (text,key) => {
    form = this.state.form;
    form[key] = text;
    this.setState(form)
  }
  login = () => {
    this.setState({modalVisibility : true});
    apiService = new APIService('https://reqres.in/','api/login',this.state.form,{'Content-Type':'application/json'},'POST');
    apiService.fetch().then((res)=>{
      this.setState({ modalVisibility: false });   
      if(!res.ok)
        Alert.alert('Alert',JSON.parse(res._bodyText).error)
    }).catch((err) => {
      this.setState({ modalVisibility: false });
      console.log(err);
    })
  }

  render(){
    return(
      <LinearGradient 
        start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 0.0 }}
        locations={[0, 1]}
        colors={['#333C4D', '#333C4D']}
        style={this.state.style.main}>
        <CustomModal modalVisibility={this.state.modalVisibility} />
        <View style={this.state.style.logo}>
          <Image 
          style = {this.state.style.logoImage}
          source={require('../image/react-native-logo.png')} />
        </View>
        <View style={this.state.style.form}>
          <RoundTextInput 
            placeholder={getKey('form.username')} 
            onChangeText={(text, key) => this.setValue(text, 'username')}
            placeholderTextColor='#D8D8D8'/>
          <RoundTextInput 
            placeholder={getKey('form.password')} 
            secureTextEntry={true}
            onChangeText={(text, key) => this.setValue(text, 'password')}
            placeholderTextColor='#D8D8D8'/>
          <RoundButton onPress={() => this.login()} text={getKey('form.login')}/>
        </View>
      </LinearGradient>
    )
  }
}