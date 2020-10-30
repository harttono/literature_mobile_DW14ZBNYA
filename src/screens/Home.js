import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.FlexBtn}>
                <TextInput style={styles.input} placeholderTextColor="#dedede"/>
                <TouchableOpacity style={styles.btnSearch} placeholderTextColor="#dedede">
                    <Icon name="search" size={30} style={styles.textWhite}/>
                </TouchableOpacity>
            </View>
            <Text>home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex:1,
      display:"flex",
      alignItems:'center',
      justifyContent:"center",
      backgroundColor:"#161616"
    },  
    logo:{
        width:260,
        height:50
    },
    FlexBtn:{
        display:'flex',
        flexDirection:'row',
        marginVertical:20,
    },
    input:{
        width:200,
        borderColor:'#dedede',
        fontSize:16,
        height:35,
        padding:10,
        borderWidth:1,
        borderRadius:4,
        color:'#ffffff',
        backgroundColor:'#454545',
        marginRight:7
    },
    btnSearch:{
        width:40,
        borderColor:'#dedede',
        fontSize:16,
        borderRadius:4,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:35,
        color:'#ffffff',
        backgroundColor:'#AF2E1C'
    },
    textWhite:{
        color:'#ffffff'
    }
});
  
