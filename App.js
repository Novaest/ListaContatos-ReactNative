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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
  padding: 50
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});