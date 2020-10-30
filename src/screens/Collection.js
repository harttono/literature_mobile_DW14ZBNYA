import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView,Image} from 'react-native';

const Collection = () => {
   const [data,setData] = useState([
       {    
            id:1,
            title:'pemograman javascript',
            author:'andy nugroho',
            publication:2017
       },
       {    
            id:2,
            title:'modul node js',
            author:'andy nugroho',
            publication:2019
       },
       {    
            id:3,
            title:'javascript advanced',
            author:'andy nugroho',
            publication:2019
        },
        {    
            id:4,
            title:'pemograman php',
            author:'andy nugroho',
            publication:2019
        }
   ])

    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList style={{marginTop:40}} data={data} 
                renderItem = {({item}) =>(
                    <View style={styles.cardList}>
                        <Image source={require('../../assets/cover.png')} style={styles.imgContainer}/>
                        <Text style={styles.whiteText}>{item.title}</Text>
                        <View style={styles.cardTextContent}>
                            <Text style={styles.whiteText}>{item.author}</Text>
                            <Text style={styles.whiteText}>{item.publication}</Text>
                        </View>
                    </View>
                )}
                />
            </ScrollView>
        </View>
    )
}

export default Collection;

const styles = StyleSheet.create({
    container: {
      flex:1,
      display:"flex",
      alignItems:'center',
      justifyContent:"center",
      backgroundColor:"#161616"
    },  
    cardList:{
        width:220,
        borderWidth:1,
        padding:5
    },
    imgContainer:{
        height:180,
        borderRadius:3,
    },
    cardTextContent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    whiteText:{
        color:'#ffffff',
        textAlign:'left',
        marginTop:5,
        fontSize:18
    }
});
  
