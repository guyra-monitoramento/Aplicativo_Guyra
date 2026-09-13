import { StyleSheet, View, Image, Text, TextInput, Switch } from 'react-native';
import React, { useState } from 'react';

import Button from '../components/Button';
import ScreenWithTabBar from '../components/TabBar';


const ActionsScreen = ({ navigation }) => {
    const [ativado1, setAtivado1] = useState(false);
    const [ativado2, setAtivado2] = useState(false);
    const [ativado3, setAtivado3] = useState(false);
    const [ativado4, setAtivado4] = useState(false);
    const [ativado5, setAtivado5] = useState(false);
    return (
        <ScreenWithTabBar>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Ações</Text>
                <Text style={styles.textSubtitle}>Ventiladores</Text>
                <View style={styles.containerVentiladores}>
                    <View style={styles.item}>
                    <Text style={styles.textToggles}>Ventilador 1</Text>
                    <Switch
                        value={ativado1}
                        onValueChange={setAtivado1}
                        trackColor={{ false: '#767577', true: '#15ff00' }}
                        thumbColor={ativado1 ? '#f5dd4b' : '#f4f3f4'}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                    </View>
                    <View style={styles.item}>
                    <Text style={styles.textToggles}>Ventilador 2</Text>
                    <Switch
                        value={ativado2}
                        onValueChange={setAtivado2}
                        trackColor={{ false: '#767577', true: '#15ff00' }}
                        thumbColor={ativado2 ? '#f5dd4b' : '#f4f3f4'}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                    </View>
                    <View style={styles.item}>
                    <Text style={styles.textToggles}>Ventilador 3</Text>
                    <Switch
                        value={ativado3}
                        onValueChange={setAtivado3}
                        trackColor={{ false: '#767577', true: '#15ff00' }}
                        thumbColor={ativado3 ? '#f5dd4b' : '#f4f3f4'}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                    </View>
                </View>
                <Text style={styles.textSubtitle}>Exaustores</Text>
                <View style={styles.containerExaustores}>
                    <View style={styles.item}>
                    <Text style={styles.textToggles}>Esquerdo</Text>
                    <Switch
                        value={ativado4}
                        onValueChange={setAtivado4}
                        trackColor={{ false: '#767577', true: '#15ff00' }}
                        thumbColor={ativado4 ? '#f5dd4b' : '#f4f3f4'}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                    </View>
                    <View style={styles.item}>
                    <Text style={styles.textToggles}>Direito</Text>
                    <Switch
                        value={ativado5}
                        onValueChange={setAtivado5}
                        trackColor={{ false: '#767577', true: '#15ff00' }}
                        thumbColor={ativado5 ? '#f5dd4b' : '#f4f3f4'}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                    </View>
                </View>
            </View>
        </ScreenWithTabBar>
    )
}

export default ActionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E9E9E9",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom: 120,
    },

    textTitle: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#F3680A",
        margin: 20,
    },

    textSubtitle: {
        fontSize: 23,
        fontWeight: "bold",
        margin: 10,
    },

    containerVentiladores: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        width: "100%",
        maxWidth: 500,
        justifyContent: "center",
    },

    containerExaustores: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: 500,
        paddingHorizontal: 10,
        justifyContent: "center",
    },

    textToggles: {
        fontSize: 20,
        marginBottom: 6,
        textAlign: "center",
    },

    item: {
        width: "50%",
        minWidth: 130,
        alignItems: "center",
        marginBottom: 20,
    },
});