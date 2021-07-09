import * as React from 'react';
import variables from './styles/variables.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from  "react-native-splash-screen";
import Icon from 'react-native-vector-icons/FontAwesome';

import MainScreen from './screens/Main';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import CreateScreen from './screens/Create';
import ShowScreen from './screens/Show';
import QueryScreen from './screens/Query';

import AddCollectionScreen from './screens/create/addCollection';
import AddCardScreen from './screens/create/addCard';

import ShowCardsScreen from './screens/show/showCards';
import ShowCollectionsScreen from './screens/show/showCollections';
import ShowSingleCardScreen from './screens/show/showSingleCard';

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                  name="Main"
                  component={MainScreen}
                  options={{
                    title: "Karteigo",
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor,
                    },
                  }}
            />
            <Stack.Screen
                  name="Show"
                  component={ShowScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
            />
            <Stack.Screen
                  name="ShowCards"
                  component={ShowCardsScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
            />
            <Stack.Screen
                  name="ShowCollections"
                  component={ShowCollectionsScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
            />

            <Stack.Screen
                  name="Create"
                  component={CreateScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
            />
            <Stack.Screen
                  name="AddCard"
                  component={AddCardScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
            />
            <Stack.Screen
                  name="AddCollection"
                  component={AddCollectionScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
            />
            <Stack.Screen
                  name="Query"
                  component={QueryScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
            />
            <Stack.Screen
                  name="Settings"
                  component={SettingsScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor,
                        alignSelf: 'center'
                    }
                  }}
             />
            <Stack.Screen
                  name="ShowSingleCard"
                  component={ShowSingleCardScreen}
                  options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: variables.primaryColor
                    }
                  }}
             />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
