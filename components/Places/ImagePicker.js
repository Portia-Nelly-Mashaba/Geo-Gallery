import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, Alert } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Colors } from "../../constants/colors";
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState();
    const [cameraPermission, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermission?.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (cameraPermission?.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permission!',
                'You need to grant camera permissions to use this app'
            );
            return false;
        }

        if (cameraPermission?.status === PermissionStatus.GRANTED) {
            return true;
        }

        return false;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const result = await launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3], // Adjusting aspect ratio
            quality: 0.7,  // Adjusting quality for better resolution
        });

        if (!result.canceled) {
            console.log(result.assets[0].uri);  // Log the correct image URI
            setPickedImage(result.assets[0].uri);
        }
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton icon='camera' onPress={takeImageHandler}>Take Image </OutlinedButton>
        </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200, 
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
});







// import React, { useState } from 'react';
// import { View, Image, Button, StyleSheet, Text, Platform } from 'react-native';
// import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
// import { Colors } from "../../constants/colors";

// function ImagePicker() {
//     const [pickedImage, setPickedImage] = useState();
//     const [cameraPermission, requestPermission] = useCameraPermissions();

//     async function verifyPermissions() {
//         if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
//             const permissionResponse = await requestPermission();
//             return permissionResponse.granted;
//         }

//         if (cameraPermission.status === PermissionStatus.DENIED) {
//             Alert.alert(
//                 'Insufficient Permission!',
//                 'You need to grant camera permissions to use this app'
//             );
//             return false;
//         }
//         return true;
//     }

//     async function takeImageHandler() {
//         const hasPermission = await verifyPermissions();

//         if (!hasPermission) {
//             return;
//         }

//         const image = await launchCameraAsync({
//             allowsEditing: true,
//             aspect: [16, 9],
//             quality: 0.5,
//         });
//         setPickedImage(image.uri);
//     }

//     function pickImageHandler(event) {
//         const file = event.target.files[0];
//         if (file) {
//             setPickedImage(URL.createObjectURL(file));
//         }
//     }

//     let imagePreview = <Text>No image taken yet.</Text>;

//     if (pickedImage) {
//         imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.imagePreview}>
//                 {imagePreview}
//             </View>
//             {Platform.OS === 'web' ? (
//                 <input type="file" accept="image/*" onChange={pickImageHandler} />
//             ) : (
//                 <Button title="Take image" onPress={takeImageHandler} />
//             )}
//         </View>
//     );
// }

// export default ImagePicker;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     imagePreview: {
//         width: '100%',
//         height: 200,
//         marginVertical: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: Colors.primary100,
//         borderRadius: 4,
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//     },
// });

