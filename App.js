import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Font, AppLoading } from 'expo';
import store from './redux/store';
import Router from './config/routes';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isReady: false,
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Monoton': require('./assets/fonts/Monoton-Regular.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });

    this.setState({isReady: true});
  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => App);
