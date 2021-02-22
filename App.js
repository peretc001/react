import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView} from 'react-native';
import { Navbar } from './pages/Navbar'
import { Promo } from './pages/promo/Promo'
import { Products } from './pages/products/Products'


export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Navbar/>
                <SafeAreaView style={styles.container}>
                    <ScrollView
                        vertical
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 20}}>
                        <Promo/>
                        <Products/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});
