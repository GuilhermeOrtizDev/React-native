import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export default class Home extends Component{
    
    render(){

        const dados =[
            {key: 'linha 1'},
            {key: 'linha 2'},
            {key: 'linha 3'},
            {key: 'linha 4'},
            {key: 'linha 5'},
            {key: 'linha 6'},
            {key: 'linha 7'},
            {key: 'linha 8'},
            {key: 'linha 9'},
            {key: 'linha 10'},
            {key: 'linha 11'},
            {key: 'linha 12'},
            {key: 'linha 13'},
            {key: 'linha 14'},
            {key: 'linha 15'},
            {key: 'linha 16'},
            {key: 'linha 17'},
            {key: 'linha 18'},
            {key: 'linha 19'},
            {key: 'linha 20'}
        ]

        return(
            <View style={styles.container}>
                <FlatList
                    data = {dados}
                    renderItem = {({item}) => <Text style={styles.textoItem}>{item.key}</Text>}
                />
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
    textoItem:{
        color: '#34495e',
        fontSize: 20,
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
})