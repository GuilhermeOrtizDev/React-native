import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './01-styles';

export default class style extends Component{

    state = {
        sub: "Welcome"
    }

    alternar = () => {
        this.setState({
            sub: this.state.sub? '':'Welcome'
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={this.alternar}
                >
                    <Text>Mudar State</Text>
                </TouchableOpacity>
                <Text style={styles.texto}>Hello Word</Text>
                <Text>{this.state.sub}</Text>
            </View>   
        );
    }
}
