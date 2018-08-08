import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Satu extends Component {
    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center',
                justifyContent: 'center'
            }}>
            
                <Text style={{ marginBottom:20 }} >Welcome To Our App </Text> 


                <Button title="Open App"
                    onPress={
                        () => this.props.navigation.navigate('HalDua')}
                />

            </View>
        );
    }
}

export default Satu;
