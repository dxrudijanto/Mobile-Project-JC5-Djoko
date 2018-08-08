import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Satu extends Component {
    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Text>Halaman Satu</Text>
                <Button title="Ke Halaman Dua"
                    onPress={
                        () => this.props.navigation.navigate('HalDua')}
                />

            </View>
        );
    }
}

export default Satu;
