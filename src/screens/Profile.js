import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
    return (
          <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headingProfile}>Profile</Text>
                <View style={styles.iconProfile}>
                    <Icon name="envelope" color="#AF2E1C" size={25} style={{marginRight:15,width:20}}/>
                    <View style={styles.textProfile}>
                        <View>Harttonz@gmail.com</View>
                        <View>Email</View>
                    </View>
                </View>
                <View style={styles.iconProfile}>
                  <Icon name="transgender-alt" color="#AF2E1C" size={25} style={{marginRight:15,width:20}}/>
                  <View style={styles.textProfile}>
                      <View>Male</View>
                      <View>Gender</View>
                  </View>
                </View>
                <View style={styles.iconProfile}>
                    <Icon name="phone" color="#AF2E1C" size={25} style={{marginRight:15,width:20}}/>
                    <View style={styles.textProfile}>
                        <View>0897372332</View>
                        <View>Phone</View>
                    </View>
                </View>
                <View style={styles.iconProfile}>
                  <Icon name="map-marker" color="#AF2E1C" size={25} style={{marginRight:15,width:20}}/>
                  <View style={styles.textProfile}>
                      <View>Ulujami Pemalang </View>
                      <View>Address</View>
                  </View>
                </View>
                <Text style={styles.headingProfile}>My Literature</Text>
                  <View style={styles.cardList}>
                      <Image source={require('../../assets/cover.png')} style={styles.imgContainer}/>
                          <Text style={styles.whiteText}>English </Text>
                          <View style={styles.cardTextContent}>
                            <Text style={styles.whiteText}>Adam L.</Text>
                            <Text style={styles.whiteText}>2018</Text>
                          </View>
                  </View>
            </View>
          </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#161616'
  },
  headingProfile:{
    padding:15,
    color:'#ffffff',
    fontSize:20
  },
  iconProfile: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:"#161616",
    paddingHorizontal:15,
    paddingVertical:10
  },  
  textProfile:{
    color:'#ffffff',
    flex:1
  },
   cardList:{
    width:220,
    borderWidth:1,
    paddingHorizontal:15
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

