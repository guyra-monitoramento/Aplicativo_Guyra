import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/Button";

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >

                <View style={styles.content}>

                    <View style={styles.headerVoltar}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={styles.setaVoltar}>‹</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        style={styles.logo}
                        source={require("../../image/logoGuyra.png")}
                    />

                    <Text style={styles.textTitulo}>
                        Cadastre-se
                    </Text>

                    <View style={styles.campo}>
                        <Text style={styles.textOnInput}>
                            Nome
                        </Text>

                        <TextInput
                            style={styles.containerTextInput}
                            placeholder="Digite seu nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.textOnInput}>
                            Telefone
                        </Text>

                        <TextInput
                            style={styles.containerTextInput}
                            placeholder="Digite seu telefone"
                            value={telefone}
                            onChangeText={setTelefone}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.textOnInput}>
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
                        <Text style={styles.textOnInput}>
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

                    <Button
                        style={styles.botao}
                        texto="Criar conta"
                        onPress={() => navigation.navigate("Login")}
                        textStyle={styles.textBotao}
                    />

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },

    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    content: {
        width: "100%",
        maxWidth: 355,
        alignItems: "center",
    },

    headerVoltar: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: -40,
    },

    setaVoltar: {
        fontSize: 70,
        color: "#F3680A",
        lineHeight: 70,
    },

    logo: {
        width: 230,
        height: 230,
    },

    textTitulo: {
        fontSize: 30,
        fontWeight: "500",
        marginBottom: 16,
    },

    campo: {
        width: "100%",
        alignItems: "flex-start",
    },

    textOnInput: {
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 2,
        marginLeft: 3,
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

    botao: {
        backgroundColor: "#F3680A",
        width: "100%",
        margin: 30,
    },

    textBotao: {
        color: "#fff",
        fontSize: 20,
    },
});