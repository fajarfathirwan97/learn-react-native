import React , { Component } from "react";
import { getKey } from "../Lang";
import {
  Text,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
export default class CustomModal extends Component {
  constructor(props){
    super(props)    
    renderModal = this.renderModal.bind(this)
    this.state = {
      modalVisibility : true,
    }
  }

  shouldComponentUpdate(nextProps, nextState){    
    return true
  }

  renderModal = () => {
    return (<Modal
      transparent={true}
      visible={this.props.modalVisibility}
      onRequestClose={() => { return false }}
    >
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center'
      }}>
        <View style={{
          width: '100%',
          height: 300,
          justifyContent: 'center'
        }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </View>
    </Modal>)

  }
  render(){    
    return(
        this.renderModal()
    )
  }
}