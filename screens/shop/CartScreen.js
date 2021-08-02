import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';
import Card from '../../components/UI/Card';




const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,


            })
        }
        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1);

    });
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();

    const orderSuccess = () => {
        Alert.alert('Order Placed with success!!');
        return dispatch2(cartActions.emptyCart());
    }

    return (
        <View style={styles.screen}>
            <Card style={styles.summary} >
                <Text style={styles.summaryText}>Total:
                    <Text style={styles.amount} > ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100} </Text></Text>
                <Button style={Colors.accent}
                    title="Order Now"
                    disabled={cartItems.length === 0}
                    onPress={() => {
                        dispatch(ordersActions.addOrder(cartItems, cartTotalAmount)),
                            orderSuccess()
                        // dispatch2(cartActions.emptyCart())
                    }}
                />
            </Card>

            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        amount={itemData.item.sum}
                        deletable
                        onRemove={() => {
                            dispatch(cartActions.removeFromCart(itemData.item.productId));
                        }}
                    />
                )}
            />

        </View>
    )
}
CartScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Cart',
        // headerLeft: (
        //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //         <Item
        //             title="Menu"
        //             iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        //             onPress={() => {
        //                 navData.navigation.toggleDrawer();
        //             }}
        //         />
        //     </HeaderButtons>
        // ),
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-book' : 'md-book'}
                onPress={() => {
                    navData.navigation.navigate('Orders');
                }}
            />

        </HeaderButtons>,
    };
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',

        fontSize: 18
    },
    amount: {
        color: Colors.primary
    },



});


export default CartScreen;


