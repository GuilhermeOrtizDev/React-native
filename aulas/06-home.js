import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Home extends Component{
    static navigationOptions ={
        drawerLabel: "Home"
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text1}>Hello</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#15ccd6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1:{
        color: 'white',
        fontSize: 20
    }
})