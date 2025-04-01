import { Splash } from '../Screens/SplashScreen/Splash';
import { Welcome } from '../Screens/WelcomeScreen/Welcome';
import { MessageScreen } from '../Screens/SplashScreen/MessageScreen';
import { Home } from '../Screens/Home/Home';
import React from 'react';
import { BottomNavigationTab } from './BottomNavigationTab/BottomNavigationTab';



export type AppStackParamList = {
    Splash: undefined,
    Welcome: undefined,
    MessageScreen: undefined,
    Home: undefined,
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

];