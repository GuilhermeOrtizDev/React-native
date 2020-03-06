import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';

export default class Home extends Component{

    state = {
        escolaridade: ''
    }

    render(){
        return(
            <View style={styles.container}>
                <Picker
                style = {styles.pickerCompenent}
                selectedValue = {this.state.escolaridade}
                onValueChange = {
                    (itemValor, itemIndex) =>
                    this.setState({
                        escolaridade: itemValor
                    })
                }
                >
                    <Picker.Item label = "escolha" value=""/>
                    <Picker.Item label = "ensino fundamental" value="ensino fundamental"/>
                    <Picker.Item label = "ensino medio" value="ensino medio"/>
                    <Picker.Item label = "graduação" value="graduação "/>
                </Picker>
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
    pickerCompenent:{
        width: 350
    }
})