import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ImageBackground,
  Text,
  ActivityIndicator
} from 'react-native'
import {
  Content,
  Form,
  Button
} from 'native-base'
import { NavigationActions } from 'react-navigation'
import TextInputWithLogo from '../../Components/TextInputWithLogo'
import LoginActions from '../../Redux/Login'
import { isTrue, checkValidation } from '../../CustomLib/Helpers'
import { trans } from '../../Lang'
import { Colors } from '../../Themes'
import * as NavigatorHelper from '../../CustomLib/NavigatorHelper'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.textInput = {

    }
  }
  post = (form) => {
    let result = checkValidation(this.textInput, this.focusTo)
    if (result.status && !this.props.login.fetching)
      this.props.post(form)
  }

  focusTo = (name) => {
    if (name)
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
              onSubmitEditing={() => {
                this.focusTo('password')
              }}
              iconColor='white'
              iconType='FontAwesome'
              iconName='user'
              validation='required'
              ref={(ref) => { this.textInput.username = ref }}
              blurOnSubmit
              returnKeyType='next'
              style={{ color: 'white' }}
              onChangeText={(value) => { setForm({ username: value }) }}
              placeholderTextColor='white'
              placeholder={trans('en.form.username')} />

            <TextInputWithLogo
              onSubmitEditing={() => {
                this.post(login.form)
              }}
              iconColor='white'
              iconType='FontAwesome'
              iconName='lock'
              validation='required'
              ref={(ref) => { this.textInput.password = ref }}
              blurOnSubmit
              secureTextEntry
              returnKeyType='done'
              style={{ color: 'white' }}
              onChangeText={(value) => { setForm({ password: value }) }}
              placeholderTextColor='white'
              placeholder={trans('en.form.password')} />

            <Button full
              onPress={() => { this.post(login.form) }}
              style={{ marginTop: 20, marginLeft: 10 }}>
              {
                login.fetching ?
                  <ActivityIndicator size='large' color={Colors.white} />
                  : <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>

              }

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
    setForm: (form) => dispatch(LoginActions.setForm(form)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
