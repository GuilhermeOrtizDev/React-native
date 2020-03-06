import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class Home extends Component{

    state={
        data:''
    }

    changeDate = (valor) => {
        this.setState({
            data: valor
        })
    }

    render(){
        
        return(
            <View style={styles.container}>
                <DatePicker
                    formato = "DD/MM/YYYY"
                    style = {styles.dateC}
                    date = {this.state.data}
                    onDateChange={this.changeDate}
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
    dateC:{
        width: 350
    }
})