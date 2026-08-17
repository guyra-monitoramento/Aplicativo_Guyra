import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({ onPress, texto, style, textStyle, children }) => {
    return (
        <TouchableOpacity style={[styles.botao, style]} onPress={onPress}>
            {children ? children : <Text style={textStyle}>{texto}</Text>}
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    botao: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
});