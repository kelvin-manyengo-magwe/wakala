import { Splash } from '../Screens/SplashScreen/Splash';
import { Welcome } from '../Screens/WelcomeScreen/Welcome';
import React from 'react';

export type AppStackParamList = {
    Splash: 'undefined',
    Welcome: 'undefined'
};

export const routes = [
    {
        name: 'Splash',
        component: Splash
    },
    {
        name: 'Welcome',
        component: Welcome
    }
];