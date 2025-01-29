import { text } from 'express';
import { Link } from 'expo-router';
import { Image, ImageBackground } from 'expo-image';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Text, Card, Button, Icon } from '@rneui/themed';

import {

    View,
    StyleSheet,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Alert,

} from "react-native";
import { color } from '@rneui/base';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductScreen() {


    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const imageUri = { uri: 'http://media.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Night-wallpaper.jpg' };






    const alertButton = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);




    // Card Data
    type ItemData = {
        id: string;
        productname: string;
        productimage: string;
        productprice: Float;

    };

    const DATA: ItemData[] = [
        {
            id: '0',
            productname: 'Apple',
            productimage: 'https://wallpaperaccess.com/full/1151801.jpg',
            productprice: 40.22,
        },
        {
            id: '1',
            productname: 'Peaches',
            productimage: 'https://cdn.pixabay.com/photo/2017/08/02/22/46/peaches-2573836_1280.jpg',
            productprice: 41.22,
        },
        {
            id: '2',
            productname: 'Pear',
            productimage: 'https://s.hdnux.com/photos/01/06/26/72/18443936/3/rawImage.jpg',
            productprice: 42.22,
        },
    ];

    //Card Props
    type ItemProps = {
        item: ItemData;
    };

    const Item = ({ item, }: ItemProps) => (



        <Card
            // wrapperStyle={{ backgroundColor: '#022E33' }}
            containerStyle={{
                backgroundColor: '#022E33',
                borderColor: '#64FFC7',
                borderRadius: 15,
            }}>
            <Card.Title
                style={{ color: '#fff' }}
            >{item.productname}</Card.Title>
            <Card.Divider />

            <Card.Image
                style={{
                    padding: 0,
                    borderRadius: 15,
                }}
                source={{
                    uri: item.productimage,
                }}
            />
            <Text style={{
                marginBottom: 10,
                marginTop: 10,
                color: '#fff',
                fontWeight: '700',
            }}>
                Le prix au kg des {item.productname} est de {item.productprice} €
            </Text>

            <Button

                icon={
                    <Icon
                        name="cart-outline"
                        type='ionicon'
                        color="#fff"
                        iconStyle={{ marginRight: 10 }}
                    />
                }
                buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    backgroundColor: '#022E33',
                    borderWidth: 1,
                    borderColor: '#64FFC7',
                }}

                title="Ajouter au Panier"

            // onPress={async () => { await this.asyncFunc("Example") }}
            // onPress={alertButton}
            />
        </Card>


        // <TouchableOpacity>
        //     <ImageBackground source={{ uri: item.productimage }} contentFit="cover" transition={100}>
        //         <Text style={[styles.productname]}
        //         >{item.productname}</Text>
        //         <Text style={[styles.productname]}>{item.productprice}</Text>

        //     </ImageBackground>
        // </TouchableOpacity>
        // </View>
    );



    const [selectedId, setSelectedId] = useState<string>();

    const renderItem = ({ item }: { item: ItemData }) => {
        return (
            <Item
                item={item}
            />
        );
    };



    return (
        <View style={styles.container}>

            <ImageBackground
                source={imageUri}
                contentFit="cover"
                transition={100}
                blurRadius={25}
                style={styles.image}
            >

                <View style={styles.viewFlatList}>
                    <Text style={styles.text}>Produit</Text>

                    {/* List Data */}
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={selectedId}

                    />

                </View>

            </ImageBackground>

        </View>

    );
}

// export const setItem = async (key, value) => {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error('Error setting item:', error);
//     }
//   };



















const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#5C068C',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '700',
        alignSelf: 'center',
        paddingTop: 55,

    },
    productname: {
        fontSize: 32,
    },
    viewFlatList: {
        flex: 2,
        marginBottom: 25,
    },
    ouaioauioaui: {
        backgroundColor: '#022E33'
    }

});
