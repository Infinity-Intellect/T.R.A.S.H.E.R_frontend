import React,{Component}  from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DailyChallenge extends Component{
    render(){
        return(
            <View style = {styles.Container}>
                <Text>Daily Challenge Works!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
});