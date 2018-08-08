import React from 'react';
import { Text, View , Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail1 = ({toko}) => {
    const{
            title, Title,
            artist, Actors,
            thumbnail_image,
            image, Poster,
            url, Website
    } = toko

    // const{
    //     name,
    //     price,
    //     card_number,
    //     card_set,
    //     rarity
    // } = album

    const {
        headerContentStyle, headerTextStyle, thumbnailStyle, 
        thumbnailContainerStyle, imageStyle
    } = styles;
        
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: Poster }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{Title}</Text>
                    <Text>{Actors}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: Poster }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(Website)}>
                {/* <Button> */}
                    Visit Movie Website
                </Button>
            </CardSection>

        </Card>
    );
};

export default AlbumDetail1;


const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },

    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center', alignItems: 'center', 
        marginLeft: 10, marginRight: 10
    },
    imageStyle: {
        height: 300,  flex:1
        }
        
};