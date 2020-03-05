import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LoginForm from '../components/login/LoginForm';
import axios from 'axios'
const url = require('../url')

export default class Login extends Component {
    UNSAFE_componentWillMount() {
        const _url = url + 'login'
        axios.get(_url).then(response => {
            console.log(response.data)
            if (response.data.message === 'In home') {
                this.props.navigation.navigate('Home')
            }
        })
    }
    navigateToRegistration = () => {
        this.props.navigation.navigate('Register')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>T.R.A.S.H.E.R</Text>
                    <Text style={styles.title}>
                        An initiative to restore Earth to its clean green self
                </Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation} />
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {{textAlign:'center', fontSize:20,  paddingBottom:'5%', paddingLeft:'15%'}}>Don't have an account, </Text><TouchableOpacity onPress = {() => this.navigateToRegistration()}><Text style = {{textAlign:'center' ,fontSize:20, paddingBottom:'5%'}}>click here.</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97CB99'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: '95%',
        fontSize: 50,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#395A0D'
    },
    title: {
        fontFamily: 'arial',
        color: '#395A0D',
        marginTop: '10%',
        textAlign: 'center',
        fontSize: 25,
        width: '80%'
    }
});