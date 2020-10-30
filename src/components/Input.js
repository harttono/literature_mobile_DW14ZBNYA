import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input = ({placeholder,value,onChangeText}) => {
    return (
        <TextInput style={styles.container} placeholder={placeholder} value={value} onChangeText={onChangeText}/>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#626262',
        borderRadius:4,
        backgroundColor:'#454545'
    }
})