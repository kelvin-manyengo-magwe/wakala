import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { routes, AppStackParamList } from './routes';


const Stack= createStackNavigator<AppStackParamList>();

const StackNavigator = () => {

    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                        {routes.map((route,index) => (
                                <Stack.Screen key={index}
                                                name={route.name as keyof AppStackParamList}
                                                component={route.component} />
                        ))}
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;