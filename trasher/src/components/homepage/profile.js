import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios'
const url = require('../../url')
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: '',
            trasherId: 'sidd'
        }
    }
    changePoint(newPoint) {
        const { state: currentState } = this;
        currentState.points = newPoint;
        this.setState(currentState);
    }
    componentDidMount() {
        const _url = url + 'userpoints/getUserPoints'
        console.log(_url)
        axios.get(_url, { params: { trasherId: this.state.trasherId } }).then(
            (response) => {
                console.log(response.data)
                if (response.data.error) {
                    ToastAndroid.showWithGravityAndOffset(response.data.error[0], ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
                }
                else {
                    this.changePoint(response.data.points)
                }
            }
        ).catch(err => {
            console.log("Axios error call from getUserPoints")
            alert(err)
        })
    }
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.title}>T.R.A.S.H.E.R Points </Text>
                <Text style={styles.title}>{this.state.points}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    title: {
        fontFamily: 'arial',
        marginTop: '10%',
        textAlign: 'center',
        fontSize: 50,
        width: '100%'
    }
});