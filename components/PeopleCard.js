import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const PeopleCard = ({ name, image ,desc}) => {



    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.wrapper}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc} numberOfLines={17}>{desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        padding: 20,
        flexDirection: "row-reverse",
        justifyContent:"space-between",
        backgroundColor:"rgba(0,0,0,0.2)",
        borderRadius:10
    },
    wrapper:{
        flex:0.5
    },
    image: {
        flex:0.5,
        height: 250,
    }
    , name: {
        textAlign: "center",
        fontSize: 20,
        textTransform: "uppercase",
        color:"#D4AC2B",
        fontWeight:"900",
        letterSpacing:8
    },
    desc:{
        color:"white",
        marginTop:10,
        fontSize:10,
        padding:5,
    }
})

export default PeopleCard
