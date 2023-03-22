import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageHands: {
        flex: 1,
        width: '100%',
        height: '40%',
    },
    overlayContainer: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
    },
    imageRectangle1: {
        resizeMode: "contain",
        position: 'relative',
        top: '20%',
        
    },
    imageRectangle2: {
        resizeMode: "contain",
        position: 'absolute',
        top: '30%',
    },
    imageRectangle3: {
        resizeMode: "contain",
        position: 'absolute',
        top: '30.3%',
        left: '9.5%',
    },
    imageRectangle4: {
        resizeMode: "contain",
        position: 'absolute',
        top: '60%',
    },
    imageText: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: '45%',
        top: '20%',
        zIndex: 2,
        color: '#fff',
    },
    text: {
        position: 'relative',
        top: '2.5%',
    }
});

export default styles;
