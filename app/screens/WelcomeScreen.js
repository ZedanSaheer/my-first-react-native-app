import React from 'react'
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import RoundButtons from '../../components/RoundButtons'

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require("../people/background.jpeg")} style={styles.background}>
            <View style={styles.container}>
                <Image source={require("../assets/logo.png")} style={styles.logo} />
            </View>
            <RoundButtons text="Let's Explore ⤴" navigation={navigation} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 40,
        alignItems: "center"
    }
    , logo: {
        width: 165,
        height: 100,
        position:"relative",
        bottom:20,
        left:0
    },
    container:{
        width:"100%",
        alignItems:"center",
        height:100,
        backgroundColor:"white",
        marginTop:100,
        borderRadius:10
    }
})

export default WelcomeScreen;
