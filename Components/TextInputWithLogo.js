import React from 'react'
import { Text, Item, Icon, Input, View } from 'native-base'
import { validator, isTrue } from '../CustomLib/Helpers'
import { Colors } from '../Themes'

export default class TextInputWithLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      error: true,
      message: '',
    }
  }

  focus() {
    this.refs.input._root.focus()
  }

  validate(input) {
    let validation = this.props.validation.split('|')
    let message = []
    let status = []
    let validatorResult = []
    validation.forEach((value) => {
      validatorResult = (validator(value, input || this.state.value))
      status.push(validatorResult.status)
      if (!validatorResult.status)
        message.push(validatorResult.message.replace(/:field/gi, this.props.placeholder))
    })
    let result = {
      error: status.every(isTrue),
      message: message.join(' And ')
    }
    this.setState(result)
    return result
  }
  getPlaceholder() {
    return this.props.placeholder
  }

  render() {
    const { onSubmitEditing, autoCapitalize, returnKeyType, style, placeholder, placeholderTextColor, secureTextEntry, onChangeText, iconType, fontStyle, iconName, iconColor } = this.props
    return (
      <View>
        <Item error={!this.state.error}>
          <Icon name={iconName} style={[fontStyle, { color: !this.state.error ? 'red' : iconColor }]} type={iconType} />
          <Input
            ref='input'
            style={style}
            autoFocus={this.state.focusing}
            autoCapitalize={autoCapitalize}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            onChangeText={(value) => {
              this.setState({ value })
              let validate = this.validate(value)
              if (!validate.error)
                onChangeText(value)
            }}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder} />
        </Item>
        {
          !this.state.error ?
            <View>
              <Text style={{ color: 'red' }}>{this.state.message}</Text>
            </View>
            : null
        }
      </View>

    )
  }
}

