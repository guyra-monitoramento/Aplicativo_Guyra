import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';


import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../image/logoGuyraBranca.png')} />
            <Text style={styles.text}>Já é cliente?</Text>
            <Button
                style={styles.botao}
                texto={"Fazer login"}
                onPress={() => navigation.navigate('Login')}
                textStyle={styles.textBotao}
            />
            <Text style={styles.text}>Primeira vez?</Text>
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
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 50
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500

    },
    botao: {
        backgroundColor: 'white',
        width: 200,
        marginBottom: 30,
        margin: 10
    },
    textBotao: {
        color: '#9F5A15',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textLink: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500,
        textDecorationLine: 'underline',

    }
});