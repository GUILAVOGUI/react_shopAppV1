import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import MainButton from '../../components/UI/MainButton';
import { Ionicons } from '@expo/vector-icons';

const MenuScreen = props => {
    return (
        <View style={styles.screen}>
            <View>
                <MainButton
                    onPress={() => {
                        props.navigation.navigate('Orders');
                    }}
                >
                    <Ionicons name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                        size={23}
                        color={'white'}
                    />
                    {'  '} My Orders

                </MainButton>
            </View>

            <View>
                <MainButton
                    onPress={() => {
                        props.navigation.navigate('ProductsOverview');
                    }}
                >
                    <Ionicons name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={23}
                        color={'white'}
                    />
                    {'  '} My Products

                </MainButton>
            </View>

            <View>
                <MainButton
                    onPress={() => {
                        props.navigation.navigate('Admin');
                    }}
                >
                    <Ionicons name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                        size={23}
                        color={'white'}
                    />
                    {'  '} Admin

                </MainButton>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        height: "20%"
    },
    testFont: {
        fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',
    }


});


export default MenuScreen;


