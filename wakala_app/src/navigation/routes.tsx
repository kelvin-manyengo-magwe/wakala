import { Splash } from '../Screens/SplashScreen/Splash';
import { Welcome } from '../Screens/WelcomeScreen/Welcome';
import { MessageScreen } from '../Screens/SplashScreen/MessageScreen';
import { Home } from '../Screens/Home/Home';
import React from 'react';
import { BottomNavigationTab } from './BottomNavigationTab/BottomNavigationTab';
import { EndScreen } from '../Screens/SplashScreen/EndScreen/EndScreen';
import { LandingScreen } from '../Screens/SplashScreen/LandingScreen/LandingScreen';
import { OnBoarding } from '../Screens/SplashScreen/OnBoarding/OnBoarding';




export type AppStackParamList = {
    Splash: undefined,
    Welcome: undefined,
    MessageScreen: undefined,
    Home: undefined,
    EndScreen: undefined,
    LandingScreen: undefined,
    OnBoarding: undefined,
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
        name: 'LandingScreen',
        component: LandingScreen
    },
    {
        name: 'EndScreen',
        component: EndScreen
    },
    {
        name: 'OnBoarding',
        component: OnBoarding
    },
];