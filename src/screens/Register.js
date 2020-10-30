import React from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';

const Register = (props) => {

    return (
        <View style={Styles.container}>
           <Text style={Styles.textColor}>Sign Up</Text>
           <TextInput placeholder="email" placeholderTextColor="#dedede" style={Styles.input}  />
           <TextInput placeholder="password" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="fullname" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="gender" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="phone" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="address" placeholderTextColor="#dedede" style={Styles.input} />

           <TouchableOpacity style={Styles.button}>
               <Text style={Styles.btnTxt}>Sign Up</Text>
           </TouchableOpacity>
           <Text style={Styles.btnTxt}>Already have an account ? <TouchableOpacity onPress={ () => props.navigation.navigate('login')}style={Styles.sigUpText}>Click Here</TouchableOpacity></Text>
        </View>
    )
}

export default Register;

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