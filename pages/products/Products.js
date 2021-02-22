import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import fetchData from "../../api/fetchData"

const simpleData = [
    {
        id: 1,
        img: require('../../images/tiny_logo.png'),
        title: 'Акция 1',
        body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
    },
    {
        id: 2,
        img: require('../../images/tiny_logo.png'),
        title: 'Акция 2',
        body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
    },
    {
        id: 3,
        img: require('../../images/tiny_logo.png'),
        title: 'Акция 3',
        body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
    },
    {
        id: 4,
        img: require('../../images/tiny_logo.png'),
        title: 'Акция 4',
        body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
    },
    {
        id: 5,
        img: require('../../images/tiny_logo.png'),
        title: 'Акция 5',
        body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
    }
];

export class Products extends Component {
    renderItem1({item}) {
        return (
            <View style={styles.product}>
                <Image style={styles.image} source={item.img}></Image>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        );
    }

    render() {
        return (
            <FlatList
                style={styles.products}
                data={simpleData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={this.renderItem1}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
}

const styles = StyleSheet.create({
    products: {
        flex: 1,
        marginTop: 20
    },
    product: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 6,
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        marginBottom: 20
    },
    image: {
      width: 50,
      height: 50,
        marginBottom: 20
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    body: {
        color: '#777777',
        lineHeight: 20
    }
});
