import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'; 
import Login from './src/komponen/Login';
import Register from './src/komponen/Register';
import initpage from './src/komponen/initpage';
import myalbum from './src/components/myalbum';

const RootStack = StackNavigator(
  {
    HalLogin: { screen: Login },
    HalRegis: { screen: Register },
    HalSatu: { screen: initpage },
    HalDua: { screen: myalbum },
  },
  {
    initialRouteName: 'HalLogin',
  }
);

class App extends Component {
  render() {
    return (
  
      <RootStack />
  
  );
  }
}

export default App;
