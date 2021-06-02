import React, { Component } from 'react';
import {ActivityIndicator, ScrollView, FlatList, View, Image, Text, StyleSheet} from 'react-native';
import fetchData from "../../api/fetchData"

export class Promo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            promo: [],
            isLoading: true,
            count: 0
        };
    }

    async componentDidMount() {
        const data = await fetchData.fetchPromo();
        this.setState({promo: data})
        this.setState({ count: data.length});
        this.setState({ isLoading: false});
    }

    slideItem = ({item, index}) => {
        const { count } = this.state;

        return (
            <View style={[styles.item, { marginRight: count - 1 === index ? 0 : 10}]}>
                <Image style={styles.image} source={{uri: item.img}}/>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        );
    }

    render() {
        const { isLoading, promo, count  } = this.state;

        return (
            <ScrollView
                style={styles.container}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                { isLoading ? <ActivityIndicator/> : (
                <FlatList
                    style={styles.list}
                    data={promo}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.slideItem}
                    scrollEnabled={false}
                    numColumns={count}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
                )}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingEnd: 0,
        marginTop: 15
    },
    item: {
        maxWidth: 300,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 6,
        backgroundColor: '#00b894',
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 20
    },
    name: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 10
    },
    body: {
        color: '#ffffff',
        lineHeight: 20
    }
});