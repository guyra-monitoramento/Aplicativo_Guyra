import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

import ScreenWithTabBar from '../components/TabBar';

const AlertasScreen = () => {

    return (
        <ScreenWithTabBar>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.titulo}>
                    Últimos <Text style={styles.tituloVermelho}>alertas</Text>
                </Text>

                <Text style={styles.emoji}>🚨</Text>

                <View style={styles.cardAlerta}>
                    <Text style={styles.data}>
                        17/06/2026
                    </Text>

                    <Text style={styles.descricao}>
                        Baixa umidade ~ 30%
                    </Text>

                    <Text style={styles.detalhes}>
                        Toque para ver detalhes
                    </Text>
                </View>

                <View style={styles.cardAlerta}>
                    <Text style={styles.data}>
                        14/05/2026
                    </Text>

                    <Text style={styles.descricao}>
                        Altas temperaturas ~ 37°C
                    </Text>

                    <Text style={styles.detalhes}>
                        Toque para ver detalhes
                    </Text>
                </View>

                <View style={styles.cardAlerta}>
                    <Text style={styles.data}>
                        10/05/2026
                    </Text>

                    <Text style={styles.descricao}>
                        Altas temperaturas ~ 36,5°C
                    </Text>

                    <Text style={styles.detalhes}>
                        Toque para ver detalhes
                    </Text>
                </View>

            </ScrollView>
        </ScreenWithTabBar>
    );
};

export default AlertasScreen;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 75,
        paddingBottom: 40,
    },

    titulo: {
        fontSize: 40,
        fontWeight: '700',
        color: '#000',
    },

    tituloVermelho: {
        color: '#C62828',
    },

    emoji: {
        fontSize: 37,
        marginBottom: 38,
    },

    cardAlerta: {
        width: 300,
        height: 89,
        backgroundColor: '#D9D9D9',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28,
    },

    data: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginBottom: 2,
    },

    descricao: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
    },

    detalhes: {
        fontSize: 15,
        color: '#999',
        marginTop: 5,
    },

});