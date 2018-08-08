import React, { Component } from 'react';  
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Form, Item, Input, Left, Right, Icon, Body, Title } from 'native-base';
import  axios from 'axios';
// import AlbumDetail from './AlbumDetail'
import AlbumDetail1 from './AlbumDetail1'

class AlbumList extends Component {  

    state = {
        // albums: [],
        albums1: [],
        judul: ''
        };
        
    // componentWillMount() {
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // // axios.get('http://yugiohprices.com/api/rising_and_falling')
    // .then(response => this.setState({ albums: response.data }));
    // }
    
    // renderAlbums() {
    //     return this.state.albums.map(album =>
    //         <AlbumDetail key={album.title} toko={album}/>  // toko adalah nama props yang akan di panggil di komponen 'AlbumDetail'

    //         );
    //     }
        
    componentWillMount() {
        axios.get('http://www.omdbapi.com/?t=Rampage&y=2018?&apikey=90c2a637')
        
        // .then(response => this.setState({ 
        //     albums1: response.data 
        // } ) 
        .then(response =>  {
            var hasil = [response.data]
            console.log(hasil) 
            this.setState({ 
                    albums1: hasil 
                } ) 
            }
        );
    }

    renderAlbums1() {
        return this.state.albums1.map(album =>
            <AlbumDetail1 key={album.Title} toko={album}/>  // toko adalah nama props yang akan di panggil di komponen 'AlbumDetail'

            );

        }

        // judulbaru = (e) => {
        //     this.setState({
        //         judul: e.nativeEvent.value
        //     })
        //     console.log(e.nativeEvent.value)
        // }

    gantimovie = (hasil) => {
        console.log(hasil)
        var judulbaru = hasil;
        axios.get(`http://www.omdbapi.com/?t=${judulbaru}&y=2018?&apikey=90c2a637`)
        .then(response =>  {
            var hasil = [response.data]
            console.log(hasil) 
            this.setState({ 
                    albums1: hasil 
                } ) 
            }
        );
    }


render() {
    
    return (
        <ScrollView>
            <ScrollView>
                {/* {this.renderAlbums()} */}
                {this.renderAlbums1()}
           </ScrollView>

            <ScrollView>        
                <Form>
                {/* <Item> */}
                    {/* <TextInput defaultValue={this.state.judul} onChangeText={this.judulbaru} placeholder="Movie Title" /> */}
                {/* </Item> */}
                
                <Button title='Samson' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('Samson')
                } />

                <Text>  </Text>

                    <Button title='Avengers' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('Avengers')
                } />

                <Text>  </Text>

                    <Button title='Deadpool 2' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('Deadpool 2')
                } />

                <Text>  </Text>

                    <Button title='Star Wars' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('Star Wars')
                } />

                <Text>  </Text>

                    <Button title='Paddington' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('Paddington')
                } />

                <Text>  </Text>

                    <Button title='The Incredibles' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('The Incredibles')
                } />

                <Text>  </Text>

                    <Button title='The Force Awakens' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('The Force Awakens')
                } />

                <Text>  </Text>

                    <Button title='Quiet Place' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('Quiet Place')
                } />

                <Text>  </Text>

                <Button title='Rampage' block primary style={{marginTop:100}} onPress={
                    () => this.gantimovie('Rampage')
                } />
            
                {/* </Button> */}
            

                </Form>
            </ScrollView>     
      

        </ScrollView>
         



            );
    }
}

export default AlbumList;
