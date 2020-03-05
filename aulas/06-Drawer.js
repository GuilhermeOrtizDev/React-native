import React, {Component} from 'react'
import { createDrawerNavigator, createAppContainer } from '@react-navigation';

import Home from './06-home';
import Profile from './06-profile';
import Settings from './06-settings';

const myDrawer = createDrawerNavigator(
    {
        Home: Home,
        Profile: Profile,
        Settings: Settings
    }
)

export default createAppContainer(myDrawer);

