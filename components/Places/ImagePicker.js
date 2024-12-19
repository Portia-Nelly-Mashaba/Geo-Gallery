import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Text, Platform } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Colors } from "../../constants/colors";

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState();
    const [cameraPermission, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (cameraPermission.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permission!',
                'You need to grant camera permissions to use this app'
            );
            return false;
        }
        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        setPickedImage(image.uri);
    }

    function pickImageHandler(event) {
        const file = event.target.files[0];
        if (file) {
            setPickedImage(URL.createObjectURL(file));
        }
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            {Platform.OS === 'web' ? (
                <input type="file" accept="image/*" onChange={pickImageHandler} />
            ) : (
                <Button title="Take image" onPress={takeImageHandler} />
            )}
        </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});




// import React, { useState } from 'react';
// import { Button, Image, View, StyleSheet, Text, Alert } from 'react-native';
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

//     let imagePreview = <Text>No image taken yet.</Text>;

//     if (pickedImage) {
//         imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
//     }

//     return (
//         <View>
//             <View style={styles.imagePreview}>
//                 {imagePreview}
//             </View>
//             <Button title="Take image" onPress={takeImageHandler} />
//         </View>
//     );
// }

// export default ImagePicker;

// const styles = StyleSheet.create({
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