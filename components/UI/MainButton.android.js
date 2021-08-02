import React from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    Dimensions

} from 'react-native';
import Colors from '../../constants/Colors';

const MainButton = props => {

    let ButtonComponent = TouchableOpacity;

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent
                activeOpacity={0.8}
                onPress={props.onPress}
            >
                <View style={{ ...styles.button, ...props.style }}>
                    <Text style={styles.buttonText}>
                        {props.children}
                    </Text>
                </View>
            </ButtonComponent>
        </View>

    )


}


const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
        marginVertical: 10,
        width: Dimensions.get('window').width / 1.7
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25

    },
    buttonText: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',

        fontSize: 18

    }

});

export default MainButton;










