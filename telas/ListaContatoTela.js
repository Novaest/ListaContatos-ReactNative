import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../components/BotaoCabecalho';
import ContatoItem from '../components/ContatoItem'

import { useSelector } from 'react-redux';

const ListaContatoTela = (props) => {
    const contatos = useSelector(estado => estado.contatos.contatos);
    return (
        <FlatList
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={contato =>
                <ContatoItem
                    nomeContato={contato.item.titulo}
                    onSelect={
                        () => props.navigation.navigate('DetalhesContato',
                            { tituloContato: contato.item.titulo, idLugar: contato.id, numeroContato: contato.item.numero})
                    }
                    imagem={null}
                    numeroContato={contato.item.numero}
                />

            } />
    );
}

ListaContatoTela.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Lista de contatos',
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('NovoContato') }} />
            </HeaderButtons>
    }
}






const estilos = StyleSheet.create({

});

export default ListaContatoTela;

//Mapatela
//NovoLugarTela
//DetalhesDoLugarTela
//ListaDeLugarestela