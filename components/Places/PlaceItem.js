import React from 'react';
import { Pressable, StyleSheet, Image, View, Text } from "react-native";
import { Colors } from '../../constants/colors';

function PlaceItem({ place, onSelect }) {
    return (
        <Pressable onPress={onSelect} style={({pressed}) => [styles.item, pressed && styles.pressed]}>
            <Image style={styles.image} source={{ uri: place.imageUri }} />
            <View style={styles.info}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    );
}

export default PlaceItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: Colors.primary500,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    pressed: {
        opacity: 0.9
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100
    },
    info: {
        flex: 2,
        padding: 12
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.gray700,
    },
    address: {
        fontSize: 14,
        color: '#666',
    },
});








// import React from 'react';
// import { Pressable, StyleSheet, Image, View, Text } from "react-native";

// function PlaceItem({ place, onSelect }) {
//     return (
//         <Pressable onPress={onSelect} style={styles.placeItem}>
//             <Image style={styles.image} source={{ uri: place.imageUri }} />
//             <View style={styles.info}>
//                 <Text style={styles.title}>{place.title}</Text>
//                 <Text style={styles.address}>{place.address}</Text>
//             </View>
//         </Pressable>
//     );
// }

// export default PlaceItem;

// const styles = StyleSheet.create({
//     placeItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//         padding: 10,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 8,
//         elevation: 5,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         backgroundColor: '#ccc',
//         borderColor: '#000',
//         borderWidth: 2,
//     },
//     info: {
//         marginLeft: 15,
//         flex: 1,
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//         color: '#333',
//     },
//     address: {
//         fontSize: 16,
//         color: '#666',
//     },
// });



