import React,{Component}  from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Leaderboard extends Component{
    render(){
        return(
            <View style = {styles.Container}>
                <Text>Leaderboard Works!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
});

