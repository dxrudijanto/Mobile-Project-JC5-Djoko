import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';


const App = () => {  return (
  <View>
    <View>

      <Header headerText={'My Movie Year 2018'} />
      <AlbumList />

    </View>

    <View style={{ marginBottom: -200, marginTop:10, alignSelf: 'center' }}>

      <Text> My Movies - End </Text>

    </View>
  </View>

  );
};

export default App;
