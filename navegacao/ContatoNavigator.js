import { createStackNavigator } from 'react-navigation-stack';
import DetalhesContatoTela from '../telas/DetalhesContatoTela';
import ListaContatoTela from '../telas/ListaContatoTela';
import ContatoTela from '../telas/ContatoTela';
import NovoContatoTela from '../telas/NovoContatoTela';
import { createAppContainer } from 'react-navigation';


const ContatoNavigator = createStackNavigator({
    ListaContato: ListaContatoTela,
    DetalhesContato: DetalhesContatoTela,
    NovoContato: NovoContatoTela,
    Mapa: ContatoTela
});

export default createAppContainer(ContatoNavigator);
