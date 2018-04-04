import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ImageBackground,
  Text,
} from 'react-native'
import {
  Content,
  Form,
  Button
} from 'native-base'
import TextInputWithLogo from '../../Components/TextInputWithLogo'
import LoginActions from '../../Redux/Login'
import { isTrue } from '../../CustomLib/Helpers'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.textInput = {

    }
  }
  checkValidation() {
    let validate = []
    let message = []
    let textInput = this.textInput
    for (let textInputKey in textInput) {
      let result = textInput[textInputKey].validate()
      validate.push(result.status)
      if (!result.status)
        message.push(result.message)
    }
    return {
      status: validate.every(isTrue),
      message: message[0]
    }
  }
  post() {
    let checkValidation = this.checkValidation()
    if (!checkValidation.status)
      this.props.post(this.props.login)
    else
      alert(checkValidation.message)
  }

  handleOnSubmitEditing(name) {
    this.textInput[name].focus()
  }

  render() {
    const { setForm, login } = this.props
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
            <TextInputWithLogo
              // onSubmitEditing={() => {
              //   this.handleOnSubmitEditing('password')
              // }}
              iconColor='white'
              iconType='FontAwesome'
              iconName='lock'
              validation='required'
              ref={(ref) => { this.textInput.required = ref }}
              blurOnSubmit={true}
              returnKeyType='next'
              style={{ color: 'white' }}
              onChangeText={(value) => { setForm({ username: value }) }}
              placeholderTextColor='white'
              placeholder={'required'} />

            <TextInputWithLogo
              // onSubmitEditing={() => {
              //   this.handleOnSubmitEditing('password')
              // }}
              validation='number'
              ref={(ref) => { this.textInput.number = ref }}
              blurOnSubmit={true}
              returnKeyType='next'
              style={{ color: 'white' }}
              onChangeText={(value) => { setForm({ username: value }) }}
              placeholderTextColor='white'
              placeholder={'number'} />

            {/* <TextInputWithLogo
              onSubmitEditing={() => {
                this.handleOnSubmitEditing('password')
              }}
              ref={(ref) => { this.textInput.username = ref }}              
              blurOnSubmit={true}
              returnKeyType='next'
              style={{ color: 'white' }}
              onChangeText={(value) => { setForm({ username: value }) }}
              placeholderTextColor='white'
              placeholder={trans('en.form.username')} />

            <TextInputWithLogo
              ref={(ref) => { this.textInput.password = ref }}
              validation='required'
              typeFont='FontAwesome'
              fontName='lock'
              fontColor='white'
              secureTextEntry={true}
              blurOnSubmit={true}
              returnKeyType='next'
              style={{ color: 'white' }}
              onChangeText={(value) => { setForm({ username: value }) }}
              placeholderTextColor='white'
              placeholder={trans('en.form.password')} /> */}

            <Button full
              onPress={() => { this.post(login.form) }}
              style={{ marginTop: 20, marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </Button>
          </Form>
        </Content>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    post: (form) => dispatch(LoginActions.post(form)),
    setForm: (form) => dispatch(LoginActions.setForm(form))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
