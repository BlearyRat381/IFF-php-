import { Text, View, Button, TextInput } from 'react-native';

export default function Mod() {
    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "red", backgroundColor: "lightgray", marginBottom: 20}}>
                Loka das quebradas
            </Text>
        </View>
    );
}

export function Cabecalho() {
    return (
        <View style={{ backgroundColor: "lightgray", marginBottom: 20}} >
            <Text>Cabeçalho: </Text>
            <TextInput style={{
                backgroundColor: "gray",
                height: 40,
                padding: 5
            }}>
            </TextInput>
        </View>

    )
}

export function Corpo() {
    return (
        <View style={{ backgroundColor: "lightgray", marginBottom: 20}} >
            <Text>Email:</Text>
            <TextInput style={{
                backgroundColor: "gray",
                height: 40,
                padding: 5
            }}>
            </TextInput>
        </View>
    )
}

export function Rodape() {
    return (
        <View style={{ backgroundColor: "lightgray", marginBottom: 20}} >
            <Text>Rodape</Text>
        </View>
    )
}