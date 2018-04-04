import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'native-base'
import ToastActions from '../Redux/Toast'

class Toast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        roundButton: { backgroundColor: '#63C5D1', borderRadius: 30, margin: 20, padding: 10 },
      },
      placeholder: props.placeholder,
      onPress: props.onPress,
      text: props.text
    }
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.props.hide()
    }, 1500)
  }
  render() {
    const { toast } = this.props
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        borderRadius: 100,
        padding: 10,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)',
        display: toast.show ? 'flex' : 'none'
      }}>
        <Text style={{ fontSize: 12 }}>{toast.message}</Text>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    toast: state.toast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => dispatch(ToastActions.hide())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast)