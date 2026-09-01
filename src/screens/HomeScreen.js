import { StyleSheet, View, Image, Text, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';


import Button from '../components/Button';
import ScreenWithTabBar from '../components/TabBar';

const HomeScreen = ({ navigation }) => {
    return (
        <ScreenWithTabBar>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Como está seu viveiro?</Text>
                    <Text style={styles.textSubtitle}>Veja aqui os dados coletados</Text>

                    <View style={styles.containerCards}>
                        <View style={styles.cards}>
                            <Text style={styles.textTitleCard}>Temperatura</Text>
                            <Text style={styles.textSubtitleCard}>Média</Text>
                            <Text style={styles.textDadosCard}>24°C</Text>
                            <Text style={styles.textLinkCard}>Toque para ver gráficos e mais informações</Text>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.textTitleCard}>Umidade</Text>
                            <Text style={styles.textSubtitleCard}>Média</Text>
                            <Text style={styles.textDadosCard}>52%</Text>
                            <Text style={styles.textLinkCard}>Toque para ver detalhes</Text>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.textTitleCard} numberOfLines={1}>Gases tóxicos</Text>
                            <Text style={styles.textSubtitleCard}>Média</Text>
                            <Text style={styles.textDadosCard}>45ppm</Text>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.textTitleCard}>Luminosidade</Text>
                            <Text style={styles.textSubtitleCard}>Média</Text>
                            <Text style={styles.textDadosCard}>321lx</Text>
                        </View>
                    </View>

                    <View style={styles.containerConclusao}>
                        <Text style={styles.textTitleResumo}>Resumo</Text>
                        <Text style={styles.textConclusao}>Temperatura, Umidade e Gases: </Text>
                        <Text style={{color:'#209808', fontWeight: 'bold' }}>bons</Text>
                        <Text style={styles.textConclusao}>Luminosidade:</Text>
                        <Text style={{color:'#209808', fontWeight: 'bold' }}>levemente baixa</Text>
                    </View>
                </View>
            </ScrollView>
        </ScreenWithTabBar>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 20,
    },
    scrollContent: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 100,
    },
    textTitle: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    textSubtitle: {
        fontSize: 17,
        marginBottom: 30
    },
    containerCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 12,
    },
    cards: {
        width: '47%',
        backgroundColor: '#e6e6e6',
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 12,
        marginBottom: 16,
        alignItems: 'center',
    },
    textTitleCard: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#F3680A'
    },
    textSubtitleCard: {
        fontSize: 15,
        marginBottom: 4
    },
    textDadosCard: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    textLinkCard: {
        color: 'grey',
        fontSize: 7
    },
    containerConclusao: {
        backgroundColor: '#f0c8a5',
        width: 250,
        height: 130,
        borderRadius: 10,
        alignItems: 'center'
    },
    textTitleResumo: {
        color: '#F3680A',
        fontWeight: 'bold',
        margin: 10,
        fontSize: 19
    },
    textConclusao: {
        fontSize: 15
    },

});