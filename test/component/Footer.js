import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'

class Footer extends Component {  render() {
    return (
        <Text style={{  
            color:'white',  backgroundColor:'black',  
            fontSize:20,  fontStyle:'italic',  fontWeight:'bold',  
            textAlign:'center',  padding:25, margin:15
            }}>

        Ini dari .component/Footer.js
        
        </Text>
        ); // return
    }  // render
}  // Component
    
export default Footer;