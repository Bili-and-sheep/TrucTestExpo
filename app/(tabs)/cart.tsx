import { Image, ImageBackground } from 'expo-image';
import { text } from 'express';
import { Link } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CartScreen() {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const imageUri = { uri: 'http://media.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg' };

    return (
        <View
            style={styles.container}
        // className='flex-1 justify-center items-center bg-black'
        >
            {/* <Image
                style={styles.image}
                source="https://wallpaperaccess.com/full/894292.jpg"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={100}
                blurRadius={25}
            /> */}
            <ImageBackground
                source={imageUri}
                contentFit="cover"
                transition={100}
                blurRadius={25}
                style={styles.image}
            >
                <Text style={styles.text}>Cart</Text>
            </ImageBackground >
        </View >

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#5C068C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '700'
    }
});