import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native';
import axios from 'axios'
const url = require('../../url')
export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.login = this.login.bind(this)
    }
    login = () => {
        if (this.state.username === '' || this.state.password === '') {
            ToastAndroid.showWithGravityAndOffset("Empty field !", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
        }
        else {
            const _url = url + 'login'
            axios.post(_url, { username: this.state.username, password: this.state.password }).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.message === "Invalid Account!") {
                        ToastAndroid.showWithGravityAndOffset(response.data.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
                    }
                    else {
                        this.props.navigation.push('Home')
                    }
                }
            )
        }

    }
    handleUsernameInputChange = (changedText) => {
        this.setState({ username: changedText })
    }
    handlePasswordInputChange = (changedText) => {
        this.setState({ password: changedText })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <TextInput placeholder="Username" style={styles.input} onChangeText={(text) => this.handleUsernameInputChange(text)} />
                <TextInput secureTextEntry placeholder="Password" style={styles.input} autoCompleteType='password' onChangeText={(text) => this.handlePasswordInputChange(text)} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()} >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: '3%'
    },
    input: {
        height: 55,
        backgroundColor: 'rgb(255,255,255)',
        paddingHorizontal: '2%',
        marginBottom: '10%',
        borderRadius: 25,
        borderWidth: 4,
        borderColor: '#395A0D',
        paddingHorizontal: '5%',
        fontSize: 18
    },
    buttonContainer: {
        backgroundColor: '#00F7',
        paddingVertical: '3%',
        borderRadius: 25,
        width: '40%',
        marginBottom: '5%',
        alignSelf: 'center',
        backgroundColor: '#17FFC0',
        elevation: 1
    },
    buttonText: {
        color: '#395A0D',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20
    }
});