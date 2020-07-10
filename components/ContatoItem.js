import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Cores from '../constantes/Cores';


const ContatoItem = (props) => {
    return (
        <TouchableOpacity style={estilos.contatoItem} onPress={props.onSelect}>
            <Image
                style={estilos.imagem}
                source={{ uri: props.imagem }} />
            <View style={estilos.infoContainer}>
                <Text style={estilos.nomeContato}>{props.nomeContato}</Text>
                <Text style={estilos.endereco}>{props.numeroContato}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    endereco: {
        color: '#777',
        fontSize: 16
    },
    nomeContato: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    contatoItem: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default ContatoItem;