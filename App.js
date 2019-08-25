import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './app/views/Home';
import Notifications from './app/views/NotificationScreen';
import ImageGrid from './app/views/ImageGrid';
import ImageGrid2 from './app/views/ImageGrid2';
import ToDoList from './app/views/ToDoList';
import ModalDetail from './app/views/ModalDetail';
import WhatsappCall from './app/views/WhatsappCall';
import WhatsappCallList from './app/views/WhatsappCallList';
import ProductView from './app/views/ProductView';
import ChatView from './app/views/ChatView';
import FlatListGrid from './app/views/FlatListGrid';
import UserList from './app/views/UserList';
import EcommerceProduct from './app/views/EcommerceProduct';
import MenuList from './app/views/MenuList';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Notifications: {screen: Notifications},
  ImageGrid: {screen: ImageGrid},
  ImageGrid2: {screen: ImageGrid2},
  ToDoList: {screen: ToDoList},
  ModalDetail: {screen: ModalDetail},
  WhatsappCall: {screen: WhatsappCall},
  WhatsappCallList: {screen: WhatsappCallList},
  ProductView: {screen: ProductView},
  ChatView: {screen: ChatView},
  FlatListGrid: {screen: FlatListGrid},
  UserList: {screen: UserList},
  EcommerceProduct: {screen: EcommerceProduct},
  MenuList: {screen: MenuList}
});

const App = createAppContainer(MainNavigator);

export default App;