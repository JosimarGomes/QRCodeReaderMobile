import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    Form,
    Item,
    Input,
    Content,
    Header,
    Button,
    Text,
    Icon,
    Toast
} from 'native-base';
import {
    COLOR_SUPORTE_PRIMARY,
    COLOR_NEUTRAL_DARK,
    COLOR_NEUTRAL_WHITE,
    COLOR_SUPORTE_DANGER,
    FONT_SIZE_M
} from '../design-stystem';

export default function LoginScreen({ login }) {
    
    const [name, setName] = useState('');

    const setNameInput = event => {
        const value = event.nativeEvent.text.replace(" ", "");
        setName(value)
    }

    function submitLogin() {
        if (!name) {
            Toast.show({
                style: { backgroundColor: COLOR_SUPORTE_DANGER },
                text: 'Preencha o nome de usuário',
                buttonText: 'Fechar'
            })
        }

        login(name);
    }
    
    return (
        <Content>
            <Header style={styles.header}>
                <Icon name="person-add" style={styles.icon} />
                <Text style={styles.headerTitle}>
                    Login
                </Text>
            </Header>
            <Form style={styles.form}>
                <Item>
                    <Input
                        value={name}
                        style={styles.input}
                        placeholder="Digite seu apelido (sem espaços)"
                        placeholderTextColor={COLOR_NEUTRAL_DARK}
                        onChange={setNameInput }
                    />
                </Item>
                <Button
                    style={styles.button}
                    onPress={submitLogin}
                >
                    <Text>Salvar</Text>
                </Button>
            </Form>
        </Content>
    )
}

const styles = StyleSheet.create({
    form: {
        alignSelf: 'center',
        marginTop: 100,
        width: '80%',
    },
    button: {
        backgroundColor: COLOR_SUPORTE_PRIMARY,
        justifyContent: 'center',
        marginTop: 50,
    },
    input: {
        color: COLOR_NEUTRAL_DARK,
    },
    icon: {
        color: COLOR_NEUTRAL_WHITE
    },
    header: {
        backgroundColor: COLOR_SUPORTE_PRIMARY,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: FONT_SIZE_M,
        color: COLOR_NEUTRAL_WHITE,
        marginLeft: 30,
        fontWeight: 'bold' 
    }
})