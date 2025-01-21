import { Image } from 'expo-image';
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://wallpaperaccess.com/full/1533684.jpg"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={100}
      />
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },

});