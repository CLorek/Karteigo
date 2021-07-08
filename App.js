import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from  "react-native-splash-screen";

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import CreateScreen from './screens/Create';
import QueryScreen from './screens/Query';

import AddCollectionScreen from './screens/create/addCollection';
import AddCardScreen from './screens/create/addCard';

import ShowCardsScreen from './screens/create/showCards';
import ShowCollectionsScreen from './screens/create/showCollections';

const Stack = createStackNavigator();

const MyStack = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={ HomeScreen } />
            <Stack.Screen name="Settings" component={ SettingsScreen } />
            <Stack.Screen name="Create" component={ CreateScreen } />
            <Stack.Screen name="Query" component={ QueryScreen} />


            <Stack.Screen name="ShowCards" component={ ShowCardsScreen } />
            <Stack.Screen name="ShowCollections" component={ ShowCollectionsScreen } />

            <Stack.Screen name="AddCard" component={ AddCardScreen } />
            <Stack.Screen name="AddCollection" component={ AddCollectionScreen } />
          </Stack.Navigator>
        </NavigationContainer>

  );
};

export default MyStack;
