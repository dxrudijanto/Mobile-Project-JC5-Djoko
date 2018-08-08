import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'

class Header extends Component {  render() {
    return (
        <Text style={{  
            color:'yellow',  backgroundColor:'blue',  
            fontSize:20,  fontStyle:'italic',  fontWeight:'bold',  
            textAlign:'center',  padding:25, margin:15
            }}>
        
        Ini dari .component/Header.js

        </Text>
        ); // return
    }  // render
}  // Component
    
export default Header;
    