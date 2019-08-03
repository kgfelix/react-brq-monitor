import Home from './Home';
import About from './About';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const RootStack = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        About: {
            screen: About
        }
    }
);
const Routes = createAppContainer(RootStack);

export default Routes;