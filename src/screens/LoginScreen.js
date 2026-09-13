import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/Button";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const emailLogin = "guyra@gmail.com";
    const senhaLogin = "123";

    const [resultadoLogin, setresultadoLogin] = useState("");

    function verificarLogin() {
        if (email == emailLogin && senha == senhaLogin) {
            navigation.navigate("Home");
        } else {
            setresultadoLogin("Login incorreto");
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>

                    <Image
                        style={styles.logo}
                        source={require("../../image/logoGuyra.png")}
                    />

                    <Text style={styles.text1}>
                        ENTRE OU CRIE SUA CONTA
                    </Text>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Email
                        </Text>

                        <TextInput
                            style={styles.containerTextInput}
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Senha
                        </Text>

                        <TextInput
                            style={styles.containerTextInput}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        />
                    </View>

                    {resultadoLogin !== "" && (
                        <Text style={styles.erro}>
                            {resultadoLogin}
                        </Text>
                    )}

                    <Button
                        style={styles.botao}
                        texto="Entrar"
                        onPress={verificarLogin}
                        textStyle={styles.textBotao}
                    />

                    <Text style={styles.text2}>
                        Ainda não tem uma conta?
                    </Text>

                    <Text
                        style={styles.textLink}
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        Cadastre-se aqui
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },

    scrollContent: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    container: {
        width: "100%",
        maxWidth: 355,
        alignItems: "center",
    },

    campo: {
        width: "100%",
        alignItems: "flex-start",
    },

    label: {
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 5,
        marginLeft: 3,
    },

    logo: {
        width: 230,
        height: 230,
        marginBottom: 20,
    },

    text1: {
        fontSize: 25,
        fontWeight: "500",
        marginBottom: 29,
        textAlign: "center",
    },

    containerTextInput: {
        height: 45,
        width: "100%",
        padding: 10,
        borderRadius: 8,
        borderColor: "#9f9f9f",
        borderWidth: 2,
        marginBottom: 10,
    },

    erro: {
        color: "red",
        fontWeight: "bold",
        marginTop: 3,
    },

    botao: {
        backgroundColor: "#F3680A",
        width: "100%",
        margin: 30,
    },

    textBotao: {
        color: "#fff",
        fontSize: 20,
    },

    text2: {
        fontSize: 15,
        fontWeight: "500",
    },

    textLink: {
        color: "#F3680A",
        fontSize: 20,
        fontWeight: "500",
        textDecorationLine: "underline",
    },
});