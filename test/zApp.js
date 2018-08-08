import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import Header from './component/Header';  
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
    // <View style={{flexDirection: 'column', alignItems: 'center'}}>
    // <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
      <View style={{flexDirection: 'column'}}>
        
        <Header/>
      
          <Text style={{color:'red',  fontSize:40,  textAlign:'center'}}>

            Text Ini dari App.js {'\n'}
            
          </Text>
      
        <Footer/>
      
      </View>

      ); // close of return (
    } // close of render() {
  }  // close of class App extends Component {
    
export default App;
  