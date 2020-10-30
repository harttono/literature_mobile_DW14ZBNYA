import React from 'react';
import Profile from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddLiterature from './AddLiterature';
import Collection from './Collection';
import Home from './Home';
const Tabs = createBottomTabNavigator();
const Main = () => {
    return (
        <Tabs.Navigator initialRouteName="Home">    
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                tabBarLabel:'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={24} />
                )}}/> 
            <Tabs.Screen
                name="collection"
                component={Collection}
                options={{
                tabBarLabel:'collection',
                tabBarIcon: ({ color }) => (
                    <Icon name="clipboard" color={color} size={24} />
                )}}/> 
            <Tabs.Screen
                name="add"
                component={AddLiterature}
                options={{
                tabBarLabel:'addLiterature',
                tabBarIcon: ({ color }) => (
                    <Icon name="plus-square" color={color} size={24} />
                )}}/> 

            <Tabs.Screen
                name="profile"
                component={Profile}
                options={{
                tabBarLabel:'profile',
                tabBarIcon: ({ color }) => (
                    <Icon name="user-circle" color={color} size={24} />
                )}}/>    
        </Tabs.Navigator>
    
    )
}

export default Main;
