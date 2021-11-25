import React from 'react'
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import RoundButtons from '../../components/RoundButtons'

const WelcomeScreen = (props) => {
    return (
        <ImageBackground source={require("../assets/download.jpg")} style={styles.background}>    
                <Image source={require("../assets/logo.png")} style={styles.logo} />
                <RoundButtons text="Let's Explore ⤴" />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 10,
        alignItems: "center"
    }
    , logo: {
        width: "60%",
        height: 160,
    }
})

export default WelcomeScreen;
