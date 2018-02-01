/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  WebView,
  Alert,
  ActivityIndicator,
  Modal,
  BackHandler
} from 'react-native';


export default class App extends Component<{}> {
  constructor(props){
    super(props)
    onLoadStartWebView = this.onLoadStartWebView.bind(this);
    onLoadEndWebView = this.onLoadEndWebView.bind(this);
    onLoad = this.onLoadWebView.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    onBack = this.onBack.bind(this);
    onNavigationStateChange = this.onNavigationStateChange.bind(this)
    this.state = {
      modalVisibility: false,
      canGoBack : false,
      prevUrl : null,
      url: 'https://www.whizliz.com/',
    }
    BackHandler.addEventListener('hardwareBackPress',this.onBack.bind(this))
  }
  onBack() {
    console.log(this.state);
    return this.render();
  }
  onLoadEndWebView () {
    this.setState({ modalVisibility: false })    
  }
  onLoadWebView() {
    this.setState({ modalVisibility: false })
  }
  onLoadStartWebView () {
    this.setState({modalVisibility : true})
  }
  onNavigationStateChange(navState) {    
    let url = this.state.url
    this.setState({ canGoBack: navState.canGoBack, url: navState.url,prevUrl:url})}
  renderLoading () {
    return(<Modal
      transparent={true}
      visible={this.state.modalVisibility}
      onRequestClose={() => { return false }}
    >
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          width: '100%',
          height: 300,
          justifyContent: 'center'
        }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      </View>
    </Modal>)
  }
  
  render() {
    return (
      <View style={{flex: 1,}}>
        <WebView
          source={{ uri: this.state.url }}
          onLoadStart={() => this.onLoadStartWebView()}
          onLoadEnd={() => this.onLoadEndWebView()}
          onLoad={() => this.onLoadWebView()}
          renderLoading={() => this.renderLoading()}
          onNavigationStateChange=
          {this.onNavigationStateChange.bind(this)}
          startInLoadingState
         >
        </WebView>
      </View>
    );
  }
}