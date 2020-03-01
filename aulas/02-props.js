import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './01-styles';

export default class Props extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>
                    {this.props.titulo}
                </Text>
                <Text style={styles.sub}>
                    {this.props.texto2}
                </Text>
            </View>   
        )
    }
}
