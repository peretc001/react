import React from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;

export const Navbar = () => {
    return (
        <SafeAreaView>
            <StatusBar translucent styles={styles.statusBar}/>
            <View style={styles.navbar}>
                <Text  style={styles.navbarText}>Меню</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        flex: 1,
    },
    navbar: {
        width: width,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    navbarText: {
        color: '#fff'
    }
});
