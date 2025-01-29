// import { Image, ImageBackground } from 'expo-image';
// import { text } from 'express';
// import { Link } from 'expo-router';
// import { Text, View, StyleSheet } from "react-native";

// export default function PoiScreen() {
//     const blurhash =
//         '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

//     const imageUri = { uri: 'https://wallpaperaccess.com/full/894292.jpg' };

//     return (
//         <View style={styles.container}>
//             {/* <Image
//                 style={styles.image}
//                 source="https://wallpaperaccess.com/full/894292.jpg"
//                 placeholder={{ blurhash }}
//                 contentFit="cover"
//                 transition={100}
//                 blurRadius={25}
//             /> */}
//             <ImageBackground source={imageUri} contentFit="cover" transition={100}
//                 blurRadius={25} style={styles.image}>
//                 <Text style={styles.text}>Maps</Text>
//             </ImageBackground>
//         </View>

//     );
// }

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         backgroundColor: '#5C068C',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     image: {
//         flex: 1,
//         width: '100%',
//         backgroundColor: '#0553',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         color: '#fff',
//         fontSize: 40,
//         fontWeight: '700'
//     }
// });

import { Image, ImageBackground } from 'expo-image';
import { text } from 'express';
import { Link } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";
import { Platform } from 'react-native';
import MapView from 'react-native-maps';

if (Platform.OS === 'web') {
    console.warn('Maps not supported on web');
}

export default function App() {
    return Platform.OS === 'web' ? (
        <p>Maps are not supported on this platform.</p>
    ) : (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 43.6539,
                longitude: 3.9683,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
}
