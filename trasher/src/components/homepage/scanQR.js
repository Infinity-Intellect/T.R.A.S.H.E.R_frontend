import React, { Component } from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
const url = require('../../url')
import axios from 'axios'
export default class ScanQR extends Component {
    constructor(props) {
        super(props)
    }
    onSuccess = (e) => {
        const binId = e.data;
        console.log(e.data);
        const params = {
            binId: binId,
            //Change to generic user later
            trasherId: 'sidd'
        }
        const _url = url + 'userpoints/updateUserPoints'
        console.log(_url)
        axios.get(_url, { params }).then(res => {
            console.log(res.data)
            ToastAndroid.showWithGravityAndOffset(res.data.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 100)
            this.props.onScan('profile')
        }).catch(err => {
            console.log("Axios call error from updateUserPoints")
            alert(err)
        })
    }
    render() {
        return (
            <View style={styles.Container}>
                <QRCodeScanner onRead={this.onSuccess} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
});