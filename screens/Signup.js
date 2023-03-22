import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useTranslation } from 'react-i18next';
import styles from "../components/styles";
import imageRectangle1 from "../assets/background_rectangle_1.png";
import imageRectangle2 from "../assets/background_rectangle_2.png";
import imageRectangle3 from "../assets/background_rectangle_3.png";
import imageRectangle4 from "../assets/background_rectangle_4.png";
import circle from "../assets/circle.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

export default function Login() {
    const { t } = useTranslation();
    return (
        <ImageBackground source={require("../assets/background_hands.png")} style={styles.imageHands}>
            <View style={styles.overlayContainer}>
                <Image source={imageRectangle1} style={styles.imageRectangle1} />
                <Image source={imageRectangle2} style={styles.imageRectangle2} />
                <TouchableOpacity style={styles.imageRectangle3}>
                    <Text style={[styles.imageText, { zIndex: 2 }]}>{t('log in')}</Text>
                    <Image source={imageRectangle3} style={{ zIndex: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageRectangle4}>
                    <Text style={[styles.imageText, { zIndex: 2 }]}>{t('log in')}</Text>
                    <Image source={imageRectangle4}/> 
                </TouchableOpacity>
                <Text style={styles.text}>or</Text>
                <View style={[styles.overlayContainer, { flexDirection: 'row' }]}>
                    <Image source={circle} style={{ zIndex: 1 }} />
                    <Image source={circle} style={{ zIndex: 1 }} />
                    <Image source={circle} style={{ zIndex: 1 }} />
                </View>
                <View style={[styles.overlayContainer, {top: '-32%'}, { flexDirection: 'row' }]}>
                <TouchableOpacity style={{ left: '-20%' }}>
                        <Image source={google} style={{ zIndex: 2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={facebook} style={{ zIndex: 2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ right: '-20%' }}>
                        <Image source={twitter} style={{ zIndex: 2 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}