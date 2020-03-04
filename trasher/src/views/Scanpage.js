import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

export default class Scanpage extends Component {
    constructor(props) {
        super(props)
    }
    redirectToHome = () => {
        this.props.navigation.navigate("Home")
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <QRCodeScanner />
                <View style={{ alignSelf: "flex-end", width: "100%", marginBottom: "10%" }}>
                    <Button title="Home" onPress={this.redirectToHome} />
                </View>
            </View>
        )
    }
}
