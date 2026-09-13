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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../image/logoGuyra.png')} />
                <Text style={styles.text1}>ENTRE OU CRIE SUA CONTA</Text>

                <View style={styles.campo}>
                    <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 5, marginLeft: 3 }}>Email</Text>
                    <TextInput
                        style={styles.containerTextInput}
                        placeholder='Digite seu email'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 2, marginLeft: 3 }}>Senha</Text>
                    <TextInput
                        style={styles.containerTextInput}
                        placeholder='Digite sua senha'
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.falha}>
                    {resultadoLogin ?? <Text style={{color: 'red', fontWeight: 'bold'}}>{resultadoLogin}</Text>}
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
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    campo: {
        width: 355,
        alignItems: 'flex-start',
    },
    logo: {
        width: 230,
        height: 230,
        marginBottom: 20
    },
    text1: {
        fontSize: 25,
        fontWeight: 500,
        marginBottom: 29
    },
    containerTextInput: {
        height: 45,
        width: 355,
        padding: 10,
        borderRadius: 8,
        borderColor: '#9f9f9f',
        borderWidth: 2,
        marginBottom: 10
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
        width: 355,
        margin: 30
    },
    textBotao: {
        color: '#fff',
        fontSize: 20,
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