import { Splash } from '../Screens/SplashScreen/Splash';
import { Welcome } from '../Screens/WelcomeScreen/Welcome';
import { MessageScreen } from '../Screens/SplashScreen/MessageScreen';
import { Home } from '../Screens/Home/Home';
import React from 'react';

export type AppStackParamList = {
    Splash: undefined,
    Welcome: undefined
};

export const routes = [
    {
        name: 'Splash',
        component: Splash
    },
    {
        name: 'Welcome',
        component: Welcome
    },
    {
        name: 'MessageScreen',
        component: MessageScreen
    },
    {
        name: 'Home',
        component: Home
    }
];