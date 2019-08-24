import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './app/views/Home';
import Notifications from './app/views/NotificationScreen';
import ImageGrid from './app/views/ImageGrid';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Notifications: {screen: Notifications},
  ImageGrid: {screen: ImageGrid}
});

const App = createAppContainer(MainNavigator);

export default App;