import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class style extends Component{
    clicou = () => {
        Alert.alert("Dynamico Castro", "email/senha incorreto");
    }
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../logo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.botao} onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <Text style={styles.Btext}>Login</Text>
                </TouchableOpacity>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#15ccd6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto:{
        color:'#fff',
        fontSize: 20
    },
    sub:{
        color:'#000'
    },
    logo:{
        borderRadius: 10 
    },
    input:{
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao:{
        width: 300,
        height: 42,
        backgroundColor: '#1E90FF',
        marginTop: 10,
        borderRadius:4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Btext:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#fff'
    }
});