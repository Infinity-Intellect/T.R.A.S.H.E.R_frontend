import React, { Component } from 'react'
import { Text, View, Button, Linking, PermissionsAndroid } from 'react-native'

export default class BinsNearby extends Component {
    openLink() {
        Linking.openURL("http://192.168.56.1:3000/map")
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: "50%" }}>
                <View style={{ width: "90%", alignSelf: 'center' }}>
                    <Button title="Click for Map View" onPress={this.openLink} />
                </View>

            </View>
        )
    }
}
