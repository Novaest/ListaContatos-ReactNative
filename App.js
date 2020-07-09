import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
 
export default function App() {

const [contato, setContatos] = useState ([]);
const [contadorContatos, setContadorContatos] = useState(0);


const addContato = (nome,numero) => {
  setContatos((contato) => {
    setContadorContatos(contadorContatos + 1);
    return [...contato, { key: contadorContatos.toString(), nome,numero }]
  });
}

const removerContato = (keyASerRemovida) => {
  setContatos(contato => {
    return contato.filter((contato) => {
      return contato.key !== keyASerRemovida
    })
  })
}

function Separator() {
  return <View style={styles.separator} />;
}
  return (
    <View style={styles.telaPrincipalView}>

    <ContatoInput onAddContato={addContato} />
      <View>
      <Separator />
      {/*Aqui será exibida a lista de contatos*/}
      <FlatList
        data={contato}
        renderItem={
          contato => (
              <ContatoItem
              chave={contato.item.key}
              contato={contato.item.value}
              nome={contato.item.nome}
              numero={contato.item.numero}
              onDelete={removerContato}
              />
          )
        }
      />
      {/*
              <View style={styles.itemNaLista}>
                <Text>{contato.item.value}</Text>
                <Text>{contato.item.nome}</Text>
                <Text>{contato.item.numero}</Text>
              </View>


        <FlatList
        data={lembretes}
        renderItem={
          lembrete => (
            <LembreteItem
              chave={lembrete.item.key}
              lembrete={lembrete.item.value}
              onDelete={removerLembrete} />
          )
        }
      />
      */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    paddingTop:2,
    marginTop: 4,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  ContatoTexto:{
    fontSize: 18,
    fontFamily:'sans-serif'
  },
  telaPrincipalView: {
  padding: 50
  },
  lembreteView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: "center"
  },
  ContatoInputText: {
  width: '80%',
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
  padding: 15
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});