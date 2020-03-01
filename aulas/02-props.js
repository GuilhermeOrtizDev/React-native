import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '';

export default class style extends Component{
    render(){
        return(
            <View>
                <Text style={styles.container}>
                    {this.props.titulo}
                </Text>
            </View>   
        )
    }
}
