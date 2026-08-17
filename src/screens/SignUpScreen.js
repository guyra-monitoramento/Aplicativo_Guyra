import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { use, useState } from 'react';


import Button from '../components/Button';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    return (
        <ScrollView>
            <View style={styles.headerVoltar}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.setaVoltar}>‹</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../image/logoGuyra.png')} />
                <Text style={styles.textTitulo}>Cadastre-se</Text>

                <Text style={styles.textOnInput}>Nome</Text>
                <TextInput
                    style={styles.containerTextInput}
                    placeholder='Digite seu nome'
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.textOnInput}>Sobrenome</Text>
                <TextInput
                    style={styles.containerTextInput}
                    placeholder='Digite seu sobrenome'
                    value={sobrenome}
                    onChangeText={setSobrenome}
                />

                <Text style={styles.textOnInput}>Email</Text>
                <TextInput
                    style={styles.containerTextInput}
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.textOnInput}>Senha</Text>
                <TextInput
                    style={styles.containerTextInput}
                    placeholder='Digite sua senha'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <Button
                    style={styles.botao}
                    texto={"Criar conta"}
                    onPress={() => navigation.navigate('Login')}
                    textStyle={styles.textBotao}
                />
                
            </View>
        </ScrollView>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerVoltar: {
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginBottom: -20
    },
    setaVoltar: {
        fontSize: 70,
        color: '#F3680A',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    textTitulo: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 29
    },
    textOnInput: {
        fontSize: 15,
        fontWeight: 500,
        marginEnd: 130
    },
    containerTextInput: {
        height: 40,
        width: 250,
        padding: 10,
        borderRadius: 8,
        borderColor: '#6F6F6F',
        borderWidth: 2,
        margin: 10
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