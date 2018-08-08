import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App = () => {  return (
  <View>
    <View>

      <Header headerText={'My Albums'} />
      <AlbumList />

    </View>

    <View style={{ marginBottom: -180, marginTop:10, alignSelf: 'center' }}>

      <Text> My Albums - End </Text>

    </View>
  </View>

  );
};

export default App;
