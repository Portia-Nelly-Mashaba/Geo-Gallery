import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

function OutlinedButton({ onPress, icon, children }) {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons style={styles.icon} name={icon} size={20} color={Colors.primary500} />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default OutlinedButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12, 
        paddingVertical: 8, 
        marginHorizontal: 4, // Adjust margin for spacing between buttons
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 2, 
        borderColor: Colors.primary500, 
        borderRadius: 5, 
    },
    pressed: {
        opacity: 0.7,
    },
    icon: {
        marginRight: 6, 
    },
    text: {
        fontSize: 16,
        color: Colors.primary500,
    },
});
