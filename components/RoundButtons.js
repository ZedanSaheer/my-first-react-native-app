import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const RoundButtons = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:"15%",
        alignItems:"center",
        justifyContent:"center",
        padding:20,
    },
    text:{
        color:"white",
        textAlign:"center",
        textTransform:"capitalize"
        ,letterSpacing:2,
        fontSize:20,
        fontWeight:"800"

    }
})

export default RoundButtons
