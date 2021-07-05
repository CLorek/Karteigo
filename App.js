import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/Home';
import SettingsScreen from './components/Settings';
import CreateScreen from './components/Create';
import QueryScreen from './components/Query';
import TestScreen from './components/Test';

import AddCollectionScreen from './components/create/addCollection';
import AddCardScreen from './components/create/addCard';

import ShowCardsScreen from './components/create/showCards';
import ShowCollectionsScreen from './components/create/showCollections';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Settings" component={ SettingsScreen } />
        <Stack.Screen name="Create" component={ CreateScreen } />
        <Stack.Screen name="Query" component={ QueryScreen} />
        <Stack.Screen name="Test" component={ TestScreen } />

        <Stack.Screen name="ShowCards" component={ ShowCardsScreen } />
        <Stack.Screen name="ShowCollections" component={ ShowCollectionsScreen } />

        <Stack.Screen name="AddCard" component={ AddCardScreen } />
        <Stack.Screen name="AddCollection" component={ AddCollectionScreen } />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
