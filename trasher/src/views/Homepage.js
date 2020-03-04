import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import ScanQR from '../components/homepage/scanQR';
import Leaderboard from '../components/homepage/leaderboard';
import DailyChallenge from '../components/homepage/dailyChallenge';
import Profile from '../components/homepage/profile';
import BinsNearby from "../components/homepage/binsnearby"
import axios from 'axios'
const url = require('../url')
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ActiveComponent: 'profile',
        };
        this.changeActiveComponent = this.changeActiveComponent.bind(this)
    }
    // componentDidMount() {
    //     const _url = url + "login"
    //     axios.get(_url).then((response) => {
    //         console.log(response.data.message)
    //         if (response.data.message !== 'In home') {
    //             this.props.navigation.push('Login')
    //         }
    //     })
    // }

    changeActiveComponent(newComponent) {
        this.setState({ ActiveComponent: newComponent })
        console.log(this.state.ActiveComponent)
    }
    renderBodyComponent() {
        const { state: currentState } = this;
        if (currentState.ActiveComponent === 'scanQR') {
            return <ScanQR onScan={this.changeActiveComponent} />;
        } else if (currentState.ActiveComponent === 'binsNearby') {
            return <BinsNearby />;
        } else if (currentState.ActiveComponent === 'leaderboard') {
            return <DailyChallenge />;
        } else {
            return <Profile />;
        }
    }
    render() {
        return (
            <View style={styles.Container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.Header}>
                    <Text style={styles.HeaderText}> T.R.A.S.H.E.R </Text>
                </View>
                <View style={styles.Body}>
                    {this.renderBodyComponent()}
                </View>
                <View style={styles.Footer}>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.changeActiveComponent('scanQR')}>
                        <Text style={styles.FooterText}> ScanQR </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.changeActiveComponent('binsNearby')}>
                        <Text style={styles.FooterText}> Bins Nearby </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.changeActiveComponent('leaderboard')}>
                        <Text style={styles.FooterText}> Leader board </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={() => this.changeActiveComponent('profile')}>
                        <Text style={styles.FooterText}> Profile </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Header: {
        flex: 0.15,
        backgroundColor: '#000',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        textAlignVertical: 'center',

    },
    HeaderText: {
        paddingTop: '5%',
        width: '95%',
        fontSize: 45,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    Footer: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#000',
        marginBottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    FooterText: {
        width: '100%',
        fontSize: 15,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    Body: {
        flex: 0.65
    },
    ButtonContainer: {
        paddingTop: '10%',
        width: '24%'
    }
});