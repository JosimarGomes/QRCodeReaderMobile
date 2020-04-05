import React, { Component } from 'react';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';

export default function LoginHOC(props) {
    if (props.isLogged === true) {
        return <HomeScreen {...props} />
    }

    return <LoginScreen {...props} />;
}