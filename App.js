import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './app/views/Home';
import Notifications from './app/views/NotificationScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Notifications: {screen: Notifications},
});

const App = createAppContainer(MainNavigator);

export default App;