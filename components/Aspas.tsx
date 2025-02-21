import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
export default function Aspas() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            Gira aspas
        </Text>
    </View>
);
}

export function Cabecalho() {
  return (
    <View style={styles.container}>
        <View style={styles.inputBox}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.textInput} placeholder="Digite seu nome" />
        </View>
    </View>
);
}

export function Corpo() {
    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <Text style={styles.label}>Email:</Text>
                <TextInput style={styles.textInput} placeholder="Digite seu email" />
            </View>
            <Button title='Entrar' />
        </View>
    );
}

export function Rodape() {
    
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'purple',
        marginBottom: 20,
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    inputBox: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    textInput: {
        backgroundColor: 'lightblue',
        height: 40,
        padding: 5,
        borderRadius: 5,
    },
    button: {
        marginTop: 20,
    },
});
