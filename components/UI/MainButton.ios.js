import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const MainButton = props => {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>


    )


}


const styles = StyleSheet.create({

    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginVertical: 10,
        width: Dimensions.get('window').width / 1.7

    },
    buttonText: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',
        fontSize: 18

    }

});

export default MainButton;










