import { Platform } from 'react-native';
import Cores from '../constantes/Cores';

import { createStackNavigator } from '@react-navigation/native'
import DetalhesContato from '../telas/DetalhesContato'
import ListaDeLugaresTela from '../telas/ListaDeContato'
import MapaTela from '../telas/ContatoTela'

import { createAppContainer } from 'react-navigation'


import NovoContatoTela from '../telas/NovoContato';
const ContatoNavigator = createStackNavigator({});

import { createStackNavigator } from 'react-navigation-stack';
const ContatoNavigator = createStackNavigator({
 Lugares: ListaDeLugaresTela,
 DetalheDoContato: DetalhesContato,
 NovoContato: NovoContatoTela,
 Mapa: MapaTela
}, {
    defaultNavigationOptions: {
    headerStyle: {
    backGroundColor: Platform.OS === 'android' ? Cores.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
    } 
});


export default createAppContainer(LugaresNavigator);