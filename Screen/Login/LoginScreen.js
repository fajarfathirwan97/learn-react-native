import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import {
  Container,
  Header,
  List,
  ListItem,
  Label,
  Content,
  Input,
  Form,
  Item,
  Button
} from "native-base";
import LoginActions from "../../Redux/Login";

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.form = {

    }
  }
  render() {
    const { setForm, loginRequest } = this.props
    return (
      <ImageBackground
        resizeMode='cover'
        source={require('../../image/loginBackground.png')}
        style={{
          flex: 1,
        }}>
        <Content style={{
          padding: 10,
        }}>
          <Form style={{ justifyContent: 'space-around' }}>
            <Item>
              <FontAwsome active color='white' size={20} name='user' />
              <Input
                onSubmitEditing={() => {
                  this.refs.password._root.focus()
                }}
                blurOnSubmit={true}
                returnKeyType="next"
                style={{ color: 'white' }}
                onChangeText={(value) => { setForm({ username: value }) }}
                placeholderTextColor='white'
                placeholder='Username' />
            </Item>
            <Item>
              <FontAwsome active color='white' size={20} name='lock' />
              <Input
                style={{ color: 'white' }}
                ref='password'
                onChangeText={(value) => { setForm({ password: value }) }}
                secureTextEntry={true}
                placeholderTextColor='white'
                placeholder='Password' />
            </Item>
            <Button full style={{ marginTop: 20, marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </Button>
          </Form>
        </Content>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => dispatch(LoginActions.loginRequest()),
    setForm: (form) => dispatch(LoginActions.setForm(form))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
