import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native';
import axios from 'axios'
const url = require('../../url')
export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            cpassword: "",
            email: ""
        }
        this.register = this.register.bind(this)
    }
    register = () => {
        if (this.state.username === '' || this.state.password === '' || this.state.cpassword === '' || this.state.email === '') {
            ToastAndroid.showWithGravityAndOffset("Empty field!", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
        } else if(this.state.password !== this.state.cpassword){
            ToastAndroid.showWithGravityAndOffset("Passwords not matching!", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
        }
        else {
            const _url = url + 'signup'
            console.log(_url);
            axios.post(_url, { trasherId: this.state.username, password: this.state.password, email: this.state.email }).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.error) {
                        ToastAndroid.showWithGravityAndOffset(response.data.error[0], ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
                    }
                    else {
                        ToastAndroid.showWithGravityAndOffset(response.data.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
                        this.props.navigation.push('Login')
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
    handleCPasswordInputChange = (changedText) => {
        this.setState({ cpassword: changedText })
    }
    handleEmailInputChange = (changedText) => {
        this.setState({ email: changedText })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <TextInput placeholder="Username" style={styles.input} onChangeText={(text) => this.handleUsernameInputChange(text)} />
                <TextInput placeholder="Email" style={styles.input} onChangeText={(text) => this.handleEmailInputChange(text)} />
                <TextInput secureTextEntry placeholder="Password" style={styles.input} autoCompleteType='password' onChangeText={(text) => this.handlePasswordInputChange(text)} />
                <TextInput secureTextEntry placeholder="confirm Password" style={styles.input} autoCompleteType='password' onChangeText={(text) => this.handleCPasswordInputChange(text)} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.register()} >
                    <Text style={styles.buttonText}>REGISTER</Text>
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