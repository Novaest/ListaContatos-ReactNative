import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';


const ContatoInput = (props) => {

    const [nome, setNome] = useState(''); 
    const [numero, setNumero] = useState(''); 


    return (
        <View style={estilos.contatoView}>
            <TextInput
                placeholder="Nome..."
                style={estilos.contatoTextInput}
                onChangeText={(t) => setNome(t)}
                value={nome}
            />
            <TextInput
            placeholder="Numero..."
            style={estilos.contatoTextInput}
            onChangeText={(t) => setNumero(t)}
            value={numero}
            />
            <View
                style={estilos.botao}>
                <Button
                    title="Adicionar contato"
                    onPress={() => props.onAddContato(nome,numero)}
                />
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    contatoTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        fontSize: 18
    },
    contatoView: {
        marginBottom: 8,
        alignItems: 'center'

    },
    botao: {
        fontSize:18,
        width: '80%',
        marginTop: 8
    }
});

export default ContatoInput;