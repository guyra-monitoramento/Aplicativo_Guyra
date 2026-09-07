import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';


import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../image/logoGuyraBranca.png')} />
            <Text style={{color: 'white', fontSize: 30, fontWeight: '700', marginBottom: 20}}>Bem-vindo ao Guyra</Text>
            <Text style={styles.text}>Acompanhe as informações e alertas
            {'\n'} 
            de seu viveiro</Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 10}}>Já possui uma conta?</Text>
            <Button
                style={styles.botao}
                texto={"Fazer login"}
                onPress={() => navigation.navigate('Login')}
                textStyle={styles.textBotao}
            />
            <Text style={{color: 'white', fontSize: 15, marginBottom: 5}}>Ainda não possui uma conta?</Text>
            <Text style={styles.textLink} onPress={() => navigation.navigate('SignUp')}>Cadastre-se aqui</Text>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EA792D',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    logo: {
        width: 230,
        height: 230,
        marginBottom: 25,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'center',
        lineHeight: 23,
        marginBottom: 30
    },
    botao: {
        backgroundColor: '#fff',
        width: 355,
        height: 50,
        borderRadius: 10,
        marginBottom: 35,
    },
    textBotao: {
        color: '#F3680A',
        fontSize: 19,
        fontWeight: '700',
    },
    textLink: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '700',
        textDecorationLine: 'underline',

    }
});