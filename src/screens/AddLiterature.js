import React from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';


const AddLiterature = () => {
    return (
        <View style={Styles.container}>
           <View style={Styles.textColor}>Add Literature</View>
           <TextInput placeholder="Title" placeholderTextColor="#dedede" style={Styles.input}  />
           <TextInput placeholder="Author" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="Publication" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="Pages" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="Isbn" placeholderTextColor="#dedede" style={Styles.input} />
           <TextInput placeholder="About" placeholderTextColor="#dedede" style={Styles.input} />
           
           <TouchableOpacity style={Styles.uploadBtn}>
                <Text style={Styles.uploadTxt}>Upload</Text>
           </TouchableOpacity>

           <TouchableOpacity style={Styles.button}>
               <Text style={Styles.btnTxt}>Save</Text>
           </TouchableOpacity>
        </View>
    )
}

export default AddLiterature;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#161616',
    },
    textColor:{
        color:'#ffffff',
        marginTop:12,
        display:'flex',
        justifyContent:'flex-start',
        fontSize:28,
        fontWeight:'bold',
    },
    input:{
        borderColor:'#dedede',
        fontSize:16,
        height:35,
        padding:10,
        marginVertical:10,
        borderWidth:1,
        color:'#ffffff',
        backgroundColor:'#454545',
        borderRadius:1
    },
    button:{
        backgroundColor:'#AF2E1C',
        padding:10,
        textAlign:'center',
        borderRadius:5,
        marginVertical:10,
    },
    uploadBtn:{
        backgroundColor:'#DEDEDE',
        padding:10,
        textAlign:'center',
        borderRadius:5,
        marginVertical:10,
    },
    btnTxt:{
        color:'#ffffff'
    },
    uploadTxt:{
        color:'#111111'
    },
    sigUpText:{
        color:'#AF2E1C'
    }
})