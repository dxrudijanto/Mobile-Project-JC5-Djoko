import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {  
    const { textStyle, viewStyle } = styles;  
    return (
        <View style={viewStyle}>
        
            <Text style={textStyle}>{props.headerText}</Text>
        
        </View>

    );
};

export default Header;

const styles = {
    viewStyle: {
    backgroundColor: '#F8F8F8',  justifyContent: 'center',  alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },  shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
    },

    textStyle: {
    fontSize: 25
    }
};

