import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './app/screens/WelcomeScreen';
import PeopleScreen from './app/screens/PeopleScreen';

const Stack = createStackNavigator();

const Routes = () => {

    return (
       <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }} initialRouteName="home">
            <Stack.Screen name="home" component={WelcomeScreen}/>
            <Stack.Screen name="people" component={PeopleScreen}/>
        </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Routes
