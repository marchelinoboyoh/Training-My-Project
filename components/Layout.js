import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'pink'
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    }

})

export default Layout;