import {createStackNavigator, createAppContainer} from 'react-navigation';
import Notifications from './app/views/NotificationScreen';
const MainNavigator = createStackNavigator({
  // Home: {screen: HomeScreen},
  Notifications: {screen: Notifications},
});

const App = createAppContainer(MainNavigator);

export default App;