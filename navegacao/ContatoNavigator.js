import { createStackNavigator } from 'react-navigation-stack';
import DetalhesContatoTela from '../telas/DetalhesContato';
import ListaContatoTela from '../telas/ListaContato';
import ContatoTela from '../telas/ContatoTela';
import NovoContatoTela from '../telas/NovoContatoTela';
import { createAppContainer } from 'react-navigation';


const ContatoNavigator = createStackNavigator({
    ListaContato: ListaContatoTela,
    DetalhesContato: DetalhesContatoTela,
    NovoContato: NovoContatoTela,
    Contato: ContatoTela
});

export default createAppContainer(ContatoNavigator);
