import React, { Component } from 'react';

import { AppRegistry, TouchableOpacity, View, Text } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const axios = require('axios')

export default class ScanScreen extends Component {

  constructor(props) {
    super(props)
  }

  onSuccess = (e) => {
    const binId = e.data;
    console.log(e.data);
    const params = {
      binId: binId,
      trasherId: 'sidd'
    }
    const url = 'http://192.168.56.1:3000/updateUserPoints'
    axios.get(url, { params }).then(res => {
      console.log(res.data)
      this.props.navigation.replace('Home')
    })
  }

  render() {
    return (
      <QRCodeScanner onRead={this.onSuccess} />
    );
  }
}
//AppRegistry.registerComponent('default', () => ScanScreen);