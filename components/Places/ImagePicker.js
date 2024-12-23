import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, Alert } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Colors } from "../../constants/colors";
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker({ onTakeImage }) {
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
        console.log("Has permission:", hasPermission); // Debugging

        if (!hasPermission) {
            return;
        }

        const result = await launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.7,
        });

        console.log("Image result:", result); // Debugging

        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            console.log("Image URI:", imageUri); // Debugging
            setPickedImage(imageUri);
            onTakeImage(imageUri);  // Call onTakeImage with the image URI
        } else {
            console.log("Image picking was canceled."); // Debugging
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
            <OutlinedButton icon='camera' onPress={takeImageHandler}>Take Image</OutlinedButton>
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
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
