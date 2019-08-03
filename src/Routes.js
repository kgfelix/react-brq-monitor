import Home from './Home';
import About from './About';
import Comentario from './Comentario';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const RootStack = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        About: {
            screen: About
        },
        Comentario: {
            screen: Comentario
        }
    }
);
const Routes = createAppContainer(RootStack);

export default Routes;