import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './01-styles';

export default class style extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Hello Word</Text>
                <Text style={styles.sub}>Livre da maldição</Text>
            </View>   
        );
    }
}
