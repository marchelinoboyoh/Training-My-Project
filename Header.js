import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {

    const name = "John";
    const greeting = <Text style={styles.container}>Selamat Datang {name}!!!</Text>;

    return (
        <View>
            {greeting}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        
        fontSize: 50,
        backgroundColor: 'red',
        color: 'blue'

    }

})

export default Header;