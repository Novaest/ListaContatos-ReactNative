import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(props.chave)}>
            <View style={styles.itemNaLista}>
                <Text style={styles.ContatoTexto}>{props.nome}</Text>
                <Text style={styles.ContatoTexto}>{props.numero}</Text>
            </View>
        </TouchableOpacity>
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
});


export default ContatoItem;