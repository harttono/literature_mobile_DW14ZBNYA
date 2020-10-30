import React from 'react'
import { View,StyleSheet,TouchableOpacity,Image,Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const landing = (props) => {
    return (
    <View style={styles.container}>
        <StatusBar  style="light"/>
        <Image style={styles.imgBanner}  source={require('../../assets/bgBanner.svg')}/> 

        <View style={styles.textHeadingContainer}>
          <Text style={styles.textHeading}>Source Of Intellingence</Text>
          <Text style={styles.textHeading}>Sign up and receive unlimited access to</Text>
          <Text style={styles.textHeading}>all of your literature - share your literature</Text>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={ () => props.navigation.navigate('register')}>
            <Text style={styles.signUpBtn}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInBtn} onPress={ () => props.navigation.navigate('login')}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
        
    </View>
    )
}

export default landing

const styles = StyleSheet.create({
    container: {
      flex:1,
      display:"flex",
      alignItems:'center',
      justifyContent:"center",
      backgroundColor:"#161616"
    },
    imgBanner:{
      width:190,
      height:190,
    },
    textHeadingContainer:{
      marginTop:15,
      textAlign:'center',
    },
    textHeading:{
      fontSize:16,
      color:'#ffffff'
    },
    btn:{
      marginTop:30,
      width:150,
      flexDirection:"row",
      justifyContent:"space-between",
      color:"#111111"
    },
    signUpBtn:{
      color:'#ffffff',
      backgroundColor:'#AF2E1C',
      padding:10,
      borderRadius:4
    },
    signInBtn:{
      backgroundColor:'#DEDEDE',
      padding:10,
      borderRadius:4
    }
});
  