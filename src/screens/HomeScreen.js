import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Como está seu viveiro?</Text>
            <Text style={styles.textSubtitle}>Veja aqui os dados coletados</Text>

            <View style={styles.containerCards}>
                <View style={styles.cards}>
                    <Text style={styles.textTitleCard}>Temperatura</Text>
                    <Text style={styles.textSubtitleCard}>Média</Text>
                    <Text style={styles.textLinkCard}>Toque para ver gráficos e mais informações</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.textTitleCard}>Umidade</Text>
                    <Text style={styles.textSubtitleCard}>Média</Text>
                    <Text style={styles.textLinkCard}>Toque para ver detalhes</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.textTitleCard}>Gases tóxicos</Text>
                    <Text style={styles.textSubtitleCard}>Média</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.textTitleCard}>Luminosidade</Text>
                    <Text style={styles.textSubtitleCard}>Média</Text>
                </View>
            </View>

            <View style={styles.containerConclusao}>
                <Text style={styles.textTitleConclusao}>Conclusao</Text>
                <Text style={styles.textConclusao}>Temperatura, Umidade e Gases: </Text>
                <Text style={styles.textConclusao}>Luminosidade:</Text>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    textSubtitle: {
        fontSize: 17,
    },
    containerCards: {
        margin: 20
    },
    cards: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    textTitleCard: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#F3680A'
    },
    textSubtitleCard:{
        fontSize: 15
    },
    textLinkCard: {
        color: 'grey',
        fontSize: 10
    },
    containerConclusao: {
        backgroundColor: '#fbd3b8',
        width: 250,
        height: 130,
        borderRadius: 10,
        alignItems: 'center'
    },
    textTitleConclusao: {
        
    }, 
    textConclusao: {

    },

});