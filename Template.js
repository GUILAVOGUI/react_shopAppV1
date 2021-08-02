import React from 'react';
import { View, Text, StyleSheet } from "react-native";


const Template = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The Template !
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    testFont: {
        fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',
    }


});

// iconName = { Platform.OS === 'android' ? 'md-menu' : 'bars' }


export default Template;


