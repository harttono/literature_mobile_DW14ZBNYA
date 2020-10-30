import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';

 const Login = (props) => {

    return (
        <View style={Styles.container}>
           <Text style={Styles.textColor}>Sign In</Text>
           <TextInput placeholder="email" placeholderTextColor="#dedede" style={Styles.input}  />
           <TextInput placeholder="password" placeholderTextColor="#dedede" style={Styles.input} />

           <TouchableOpacity style={Styles.button} onPress={ () => props.navigation.navigate('main')}>
               <Text style={Styles.btnTxt}>Sign In</Text>
           </TouchableOpacity>

           <Text style={Styles.btnTxt}>Do you have an account ?<TouchableOpacity onPress={ () => props.navigation.navigate('register')} style={Styles.sigUpText}> Click Here</TouchableOpacity></Text>

        </View>
    )
}

export default Login;



const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#161616',
    },
    textColor:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
    },
    input:{
        width:250,
        borderColor:'#dedede',
        fontSize:16,
        height:35,
        padding:10,
        marginVertical:10,
        borderWidth:1,
        color:'#ffffff',
        backgroundColor:'#454545',
        borderRadius:5
    },
    button:{
        backgroundColor:'#AF2E1C',
        width:250,
        padding:10,
        textAlign:'center',
        borderRadius:5,
        marginVertical:10,
    },
    btnTxt:{
        color:'#ffffff'
    },
    sigUpText:{
        color:'#AF2E1C'
    }
})