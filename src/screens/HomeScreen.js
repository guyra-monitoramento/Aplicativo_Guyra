import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";

import ScreenWithTabBar from "../components/TabBar";

const HomeScreen = () => {
    return (
        <ScreenWithTabBar>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>

                    <Text style={styles.textTitle}>
                        Como está seu viveiro?
                    </Text>

                    <Text style={styles.textSubtitle}>
                        Veja aqui os dados coletados
                    </Text>

                    <View style={styles.containerCards}>

                        <View style={styles.cards}>
                            <Text style={styles.textTitleCard}>
                                Temperatura
                            </Text>

                            <Text style={styles.textSubtitleCard}>
                                Média
                            </Text>

                            <Text style={styles.textDadosCard}>
                                24°C
                            </Text>

                            <Text style={styles.textLinkCard}>
                                Toque para ver gráficos e mais informações
                            </Text>
                        </View>

                        <View style={styles.cards}>
                            <Text style={styles.textTitleCard}>
                                Umidade
                            </Text>

                            <Text style={styles.textSubtitleCard}>
                                Média
                            </Text>

                            <Text style={styles.textDadosCard}>
                                52%
                            </Text>

                            <Text style={styles.textLinkCard}>
                                Toque para ver detalhes
                            </Text>
                        </View>

                        <View style={styles.cards}>
                            <Text
                                style={styles.textTitleCard}
                                numberOfLines={1}
                                adjustsFontSizeToFit
                            >
                                Gases tóxicos
                            </Text>

                            <Text style={styles.textSubtitleCard}>
                                Média
                            </Text>

                            <Text style={styles.textDadosCard}>
                                45ppm
                            </Text>
                        </View>

                        <View style={styles.cards}>
                            <Text style={styles.textTitleCard}>
                                Luminosidade
                            </Text>

                            <Text style={styles.textSubtitleCard}>
                                Média
                            </Text>

                            <Text style={styles.textDadosCard}>
                                321lx
                            </Text>
                        </View>

                    </View>

                    <View style={styles.containerConclusao}>
                        <Text style={styles.textTitleResumo}>
                            Resumo
                        </Text>

                        <Text style={styles.textConclusao}>
                            Temperatura, Umidade e Gases:
                        </Text>

                        <Text style={styles.bom}>
                            bons
                        </Text>

                        <Text style={styles.textConclusao}>
                            Luminosidade:
                        </Text>

                        <Text style={styles.bom}>
                            levemente baixa
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </ScreenWithTabBar>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 120,
    },

    scrollContent: {
        flexGrow: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 20,
    },

    textTitle: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
    },

    textSubtitle: {
        fontSize: 17,
        marginBottom: 30,
        textAlign: "center",
    },

    containerCards: {
        width: "100%",
        maxWidth: 500,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 8,
    },

    cards: {
        width: "47%",
        minHeight: 145,
        backgroundColor: "#e6e6e6",
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 9,
        marginBottom: 16,
        alignItems: "center",
        justifyContent: "center",
    },

    textTitleCard: {
        fontWeight: "bold",
        fontSize: 19,
        color: "#F3680A",
        textAlign: "center",
    },

    textSubtitleCard: {
        fontSize: 17,
        marginBottom: 4,
    },

    textDadosCard: {
        fontSize: 35,
        fontWeight: "bold",
    },

    textLinkCard: {
        color: "grey",
        fontSize: 9,
        textAlign: "center",
    },

    containerConclusao: {
        backgroundColor: "#f0c8a5",
        width: "100%",
        maxWidth: 250,
        minHeight: 130,
        borderRadius: 10,
        alignItems: "center",
        paddingBottom: 10,
    },

    textTitleResumo: {
        color: "#F3680A",
        fontWeight: "bold",
        margin: 10,
        fontSize: 19,
    },

    textConclusao: {
        fontSize: 15,
        textAlign: "center",
    },

    bom: {
        color: "#209808",
        fontWeight: "bold",
    },
});