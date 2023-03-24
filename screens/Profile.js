import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';

export default function Profile() {
    const { t } = useTranslation();
    return (
        <ImageBackground source={require("../assets/background_rectangle_5.png")} style={styles.imageHands}>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageHands: {
        width: '100%',
        height: '60%',
    },
});