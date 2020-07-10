import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import Cores from '../constantes/Cores';
import { useDispatch } from 'react-redux'

import * as contatosActions from '../store/contatos-actions';


const NovoContatoTela = (props) => {

    const [novoContato, setNovoContato] = useState('');
    const [numeroContato, setNumeroContato] = useState('');
    const [nomeContato, setNomeContato] = useState('');
    const dispatch = useDispatch();

    const adicionarContato = () => {
        dispatch(contatosActions.addContato(nomeContato, numeroContato));
        props.navigation.goBack();
    }
    

    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Novo contato</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={(texto) => setNomeContato(texto)}
                    value={nomeContato} />
                <TextInput
                    style={estilos.textInput}
                    onChangeText={(texto) => setNumeroContato(texto)}
                    value={numeroContato} />
                <Button
                    title="Salvar contato"
                    color={Cores.primary}
                    onPress={adicionarContato}
                />
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15
    },
    form: {
        margin: 30
    }
});

export default NovoContatoTela;