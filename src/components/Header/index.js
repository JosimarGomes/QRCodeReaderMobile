import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
    Header,
    Left,
    Text,
    Right,
    Icon
} from 'native-base';

import {
    COLOR_SUPORTE_PRIMARY,
    FONT_SIZE_M,
    COLOR_NEUTRAL_WHITE
} from '../../design-stystem';

export default function HeaderApp({loginName, logout}) {
    return (
        <Header style={styles.header}>
            <Left>
                <Text style={styles.haderName}>{loginName}</Text>
            </Left>
            <Right>
                <TouchableOpacity onPress={() => logout()}>
                    <Icon name="log-out" style={styles.icon} />
                    <Text style={styles.headerLogout}>Sair</Text>
                </TouchableOpacity>
            </Right>                
        </Header>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLOR_SUPORTE_PRIMARY,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    haderName: {
        fontSize: FONT_SIZE_M,
        color: COLOR_NEUTRAL_WHITE
    },
    icon: {
        color: COLOR_NEUTRAL_WHITE
    },
    headerLogout: {
        color: COLOR_NEUTRAL_WHITE,
        marginRight: 10
    }
})