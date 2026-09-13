import { StyleSheet, View, Image, Text } from 'react-native';
import { useEffect } from 'react';

const WelcomeScreen = ({ navigation }) => {

    useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../image/logoGuyraBranca.png')} />
            <Text style={{color: 'white', fontSize: 30, fontWeight: '700', marginBottom: 20}}>Bem-vindo ao Guyra</Text>
            <Text style={styles.text}>Acompanhe as informações e alertas
            {'\n'} 
            de seu viveiro</Text>
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
        marginBottom: 10
    }
});