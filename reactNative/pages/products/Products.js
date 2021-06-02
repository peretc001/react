import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import fetchData from "../../api/fetchData"

export class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isLoading: true
        };
    }

    async componentDidMount() {
        const data = await fetchData.fetchProducts();
        this.setState({products: data})
        this.setState({ isLoading: false});
    }

    productItem = ({item, index}) => {
        const { count } = this.state;

        return (
            <View style={[styles.product, { marginBottom: count - 1 === index ? 0 : 20}]}>
                <View style={styles.wrap}>
                    <Image style={styles.image} source={{uri: item.img}}/>
                    <View>
                        <Text style={styles.name}>{item.title}</Text>
                        <View style={styles.cost}>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.currency}>{item.currency}.</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.body}>{item.body.slice(0, 100)}</Text>

            </View>
        );
    }

    render() {
        const { isLoading, products  } = this.state;

        return (
            <FlatList
                style={styles.products}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={this.productItem}
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
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    name: {
        fontSize: 16,
        marginBottom: 10
    },
    cost: {
        flexDirection: 'row',
        alignItems: 'flex-end'

    },
    price: {
        fontWeight: 'bold',
        fontSize: 20
    },
    currency: {
        marginLeft: 5
    },
    body: {
        fontSize: 14,
        fontWeight: '300',
        lineHeight: 20,
        color: '#777777'

    }
});
