import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfileScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

    const [porte, setPorte] = useState("");
    const [showPorteOptions, setShowPorteOptions] = useState(false);

    return (
        <SafeAreaView style={styles.screen} edges={["top"]}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>

                    {/* SETA VOLTAR */}
                    <View style={styles.headerVoltar}>
                        <TouchableOpacity
                            style={styles.botaoVoltar}
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.7}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={30}
                                color="#F3680A"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* TÍTULO */}
                    <Text style={styles.title}>
                        Alterar dados
                    </Text>

                    {/* SUBTÍTULO */}
                    <Text style={styles.subtitle}>
                        Atualize suas informações pessoais
                    </Text>

                    {/* CARD PRINCIPAL */}
                    <View style={styles.dataCard}>

                        {/* EMAIL */}
                        <View style={styles.dataItem}>
                            <View style={styles.dataIcon}>
                                <Ionicons
                                    name="mail-outline"
                                    size={28}
                                    color="#F3680A"
                                />
                            </View>

                            <View style={styles.dataText}>
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    placeholder="Digite seu novo email"
                                    placeholderTextColor="#687386"
                                />
                            </View>
                        </View>

                        {/* TELEFONE */}
                        <View style={styles.dataItem}>
                            <View style={styles.dataIcon}>
                                <Ionicons
                                    name="call-outline"
                                    size={28}
                                    color="#F3680A"
                                />
                            </View>

                            <View style={styles.dataText}>
                                <TextInput
                                    style={styles.input}
                                    value={telefone}
                                    onChangeText={setTelefone}
                                    keyboardType="phone-pad"
                                    placeholder="Digite seu novo telefone"
                                    placeholderTextColor="#687386"
                                />
                            </View>
                        </View>

                        {/* SENHA */}
                        <View style={styles.dataItem}>
                            <View style={styles.dataIcon}>
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={28}
                                    color="#F3680A"
                                />
                            </View>

                            <View style={styles.dataText}>
                                <TextInput
                                    style={styles.input}
                                    value={senha}
                                    onChangeText={setSenha}
                                    secureTextEntry
                                    placeholder="Digite sua nova senha"
                                    placeholderTextColor="#687386"
                                />
                            </View>
                        </View>

                        {/* PORTE */}
                        <View style={styles.porteContainer}>

                            <TouchableOpacity
                                style={styles.dataItem}
                                activeOpacity={0.8}
                                onPress={() =>
                                    setShowPorteOptions(!showPorteOptions)
                                }
                            >
                                <View style={styles.dataIcon}>
                                    <Ionicons
                                        name="home-outline"
                                        size={28}
                                        color="#F3680A"
                                    />
                                </View>

                                <View style={styles.dataText}>
                                    <Text
                                        style={[
                                            styles.porteText,
                                            porte && styles.porteSelected,
                                        ]}
                                    >
                                        {porte || "Escolha seu porte"}
                                    </Text>
                                </View>

                                <Ionicons
                                    name={
                                        showPorteOptions
                                            ? "chevron-up"
                                            : "chevron-down"
                                    }
                                    size={24}
                                    color="#687386"
                                />
                            </TouchableOpacity>

                            {/* OPÇÕES */}
                            {showPorteOptions && (
                                <View style={styles.porteOptions}>

                                    {/* PEQUENO */}
                                    <TouchableOpacity
                                        style={[
                                            styles.porteOption,
                                            porte === "Pequeno" &&
                                                styles.porteOptionSelected,
                                        ]}
                                        onPress={() => {
                                            setPorte("Pequeno");
                                            setShowPorteOptions(false);
                                        }}
                                    >
                                        <Text
                                            style={[
                                                styles.porteOptionText,
                                                porte === "Pequeno" &&
                                                    styles.porteOptionTextSelected,
                                            ]}
                                        >
                                            Pequeno
                                        </Text>

                                        {porte === "Pequeno" && (
                                            <Ionicons
                                                name="checkmark"
                                                size={22}
                                                color="#F3680A"
                                            />
                                        )}
                                    </TouchableOpacity>

                                    {/* MÉDIO */}
                                    <TouchableOpacity
                                        style={[
                                            styles.porteOption,
                                            porte === "Médio" &&
                                                styles.porteOptionSelected,
                                        ]}
                                        onPress={() => {
                                            setPorte("Médio");
                                            setShowPorteOptions(false);
                                        }}
                                    >
                                        <Text
                                            style={[
                                                styles.porteOptionText,
                                                porte === "Médio" &&
                                                    styles.porteOptionTextSelected,
                                            ]}
                                        >
                                            Médio
                                        </Text>

                                        {porte === "Médio" && (
                                            <Ionicons
                                                name="checkmark"
                                                size={22}
                                                color="#F3680A"
                                            />
                                        )}
                                    </TouchableOpacity>

                                    {/* GRANDE */}
                                    <TouchableOpacity
                                        style={[
                                            styles.porteOption,
                                            porte === "Grande" &&
                                                styles.porteOptionSelected,
                                        ]}
                                        onPress={() => {
                                            setPorte("Grande");
                                            setShowPorteOptions(false);
                                        }}
                                    >
                                        <Text
                                            style={[
                                                styles.porteOptionText,
                                                porte === "Grande" &&
                                                    styles.porteOptionTextSelected,
                                            ]}
                                        >
                                            Grande
                                        </Text>

                                        {porte === "Grande" && (
                                            <Ionicons
                                                name="checkmark"
                                                size={22}
                                                color="#F3680A"
                                            />
                                        )}
                                    </TouchableOpacity>

                                </View>
                            )}
                        </View>

                        {/* CONFIRMAR */}
                        <TouchableOpacity
                            style={styles.confirmButton}
                            activeOpacity={0.8}
                            onPress={() => {
                                console.log({
                                    email,
                                    telefone,
                                    senha,
                                    porte,
                                });
                            }}
                        >
                            <View style={styles.checkCircle}>
                                <Ionicons
                                    name="checkmark"
                                    size={28}
                                    color="#F3680A"
                                />
                            </View>

                            <Text style={styles.confirmButtonText}>
                                Confirmar
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({

    /* TELA */
    screen: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },

    scroll: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 30,
    },

    container: {
        width: "100%",
        maxWidth: 500,
        alignSelf: "center",
    },

    /* SETA */
    headerVoltar: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 4,
    },

    botaoVoltar: {
        width: 44,
        height: 44,

        alignItems: "center",
        justifyContent: "center",
    },

    /* TÍTULO */
    title: {
        color: "#F3680A",

        fontSize: 38,
        fontWeight: "700",

        marginBottom: 4,
    },

    /* SUBTÍTULO */
    subtitle: {
        color: "#687386",

        fontSize: 18,
        fontWeight: "500",

        marginBottom: 28,
    },

    /* CARD */
    dataCard: {
        width: "100%",

        backgroundColor: "#FFFFFF",

        borderRadius: 24,

        paddingHorizontal: 18,
        paddingVertical: 24,

        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 4,
        },

        shadowOpacity: 0.08,
        shadowRadius: 10,

        elevation: 4,
    },

    /* ITEM */
    dataItem: {
        width: "100%",
        minHeight: 82,

        backgroundColor: "#F8F8FA",

        borderRadius: 16,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 14,
        paddingVertical: 10,

        marginBottom: 12,
    },

    /* ÍCONE */
    dataIcon: {
        width: 54,
        height: 54,

        borderRadius: 27,

        backgroundColor: "#FFF0E5",

        alignItems: "center",
        justifyContent: "center",

        marginRight: 14,
    },

    /* TEXTO */
    dataText: {
        flex: 1,
        minWidth: 0,
    },

    /* INPUT */
    input: {
        width: "100%",

        color: "#111827",

        fontSize: 18,
        fontWeight: "600",

        padding: 0,
        margin: 0,

        minHeight: 27,
    },

    /* PORTE */
    porteContainer: {
        width: "100%",
    },

    porteText: {
        color: "#687386",

        fontSize: 18,
        fontWeight: "600",
    },

    porteSelected: {
        color: "#111827",
    },

    /* OPÇÕES */
    porteOptions: {
        width: "100%",

        backgroundColor: "#F8F8FA",

        borderRadius: 16,

        marginTop: -4,
        marginBottom: 12,

        padding: 8,
    },

    porteOption: {
        minHeight: 50,

        borderRadius: 12,

        paddingHorizontal: 14,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    porteOptionSelected: {
        backgroundColor: "#FFF0E5",
    },

    porteOptionText: {
        color: "#687386",

        fontSize: 17,
        fontWeight: "600",
    },

    porteOptionTextSelected: {
        color: "#F3680A",
    },

    /* BOTÃO */
    confirmButton: {
        width: "100%",
        height: 68,

        backgroundColor: "#F3680A",

        borderRadius: 22,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        marginTop: 14,

        shadowColor: "#F3680A",

        shadowOffset: {
            width: 0,
            height: 5,
        },

        shadowOpacity: 0.18,
        shadowRadius: 8,

        elevation: 4,
    },

    checkCircle: {
        width: 44,
        height: 44,

        borderRadius: 22,

        backgroundColor: "#FFFFFF",

        alignItems: "center",
        justifyContent: "center",

        marginRight: 12,
    },

    confirmButtonText: {
        color: "#FFFFFF",

        fontSize: 23,
        fontWeight: "700",
    },
});