import React from 'react';
import {Text, View} from 'react-native';
import styles from "../styles/main";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreenNav from '../screens/Home';
import SettingsScreenNav from '../screens/Settings';
import CreateScreenNav from '../screens/Create';
import ShowScreenNav from '../screens/Show';
import QueryScreenNav from '../screens/Query';

const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
    return(
        <Drawer.Navigator>
             <Drawer.Screen name="Home" component={HomeScreenNav} options={{
                                                                               title: "Home",
                                                                               drawerIcon: ({focused}) => (
                                                                                 <Icon
                                                                                 name="home"
                                                                                 size={focused ? 25 : 20}
                                                                                 color={focused? '#0080ff' : '#999999'}
                                                                                 />
                                                                               )
                                                                             }}  />

             <Drawer.Screen name="Create" component={CreateScreenNav} options={{
                                                                                             title: "Create",
                                                                                             drawerIcon: ({focused}) => (
                                                                                               <Icon
                                                                                               name="plus"
                                                                                               size={focused ? 25 : 20}
                                                                                               color={focused? '#0080ff' : '#999999'}
                                                                                               />
                                                                                             )
                                                                                           }}  />

             <Drawer.Screen name="Show" component={ShowScreenNav} options={{
                                                                                                                       title: "Show",
                                                                                                                       drawerIcon: ({focused}) => (
                                                                                                                         <Icon
                                                                                                                         name="eye"
                                                                                                                         size={focused ? 25 : 20}
                                                                                                                         color={focused? '#0080ff' : '#999999'}
                                                                                                                         />
                                                                                                                       )
                                                                                                                     }}  />

             <Drawer.Screen name="Query" component={QueryScreenNav} options={{
                                                                                                          title: "Query",
                                                                                                          drawerIcon: ({focused}) => (
                                                                                                            <Icon
                                                                                                            name="book"
                                                                                                            size={focused ? 25 : 20}
                                                                                                            color={focused? '#0080ff' : '#999999'}
                                                                                                            />
                                                                                                          )
                                                                                                        }}  />

             <Drawer.Screen name="Settings" component={SettingsScreenNav} options={{
                                                                               title: "Settings",
                                                                               drawerIcon: ({focused}) => (
                                                                                 <Icon
                                                                                 name="cog"
                                                                                 size={focused ? 25 : 20}
                                                                                 color={focused? '#0080ff' : '#999999'}
                                                                                 />
                                                                               )
                                                                             }}  />
        </Drawer.Navigator>
    )
}

export default Home;