//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// create a component
class AuthScreen extends Component {

    constructor() {
        super();
        this.checkToken()
    }

    checkToken = async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            this.props.navigation.navigate('App')
        } else {
            this.props.navigation.navigate('Login')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    },
});

//make this component available to the app
export default AuthScreen;
