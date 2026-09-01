import { StyleSheet, View, Image, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';


import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const emailLogin = 'guyra@gmail.com';
    const senhaLogin = '123';
    const [resultadoLogin, setresultadoLogin] = useState('');

    function verificarLogin() {
        if (email == emailLogin && senha == senhaLogin) {
            setresultadoLogin(() => navigation.navigate('Home'));
        } else {
            setresultadoLogin('Login incorreto');
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../image/logoGuyra.png')} />
                <Text style={styles.text1}>ENTRE OU CRIE SUA CONTA</Text>
                <TextInput
                    style={styles.containerTextInput}
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.containerTextInput}
                    placeholder='Digite sua senha'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <View style={styles.falha}>
                    {resultadoLogin ?? <Text>{resultadoLogin}</Text>}
                </View>
                <Button
                    style={styles.botao}
                    texto={"Entrar"}
                    onPress={verificarLogin}
                    textStyle={styles.textBotao}
                />
                <Text style={styles.text2}>Ainda não tem uma conta?</Text>
                <Text style={styles.textLink} onPress={() => navigation.navigate('SignUp')}>Cadastre-se aqui</Text>
            </View>
        </ScrollView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    text1: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 29
    },
    containerTextInput: {
        height: 40,
        padding: 10,
        borderRadius: 8,
        borderColor: '#6F6F6F',
        borderWidth: 2,
        margin: 10
    },
    falha: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
    botao: {
        backgroundColor: '#F3680A',
        width: 250,
        margin: 30
    },
    textBotao: {
        color: '#fff',
        fontSize: 30,
    },
    text2: {
        fontSize: 15,
        fontWeight: 500

    },
    textLink: {
        color: '#F3680A',
        fontSize: 20,
        fontWeight: 500,
        textDecorationLine: 'underline',

    }
});