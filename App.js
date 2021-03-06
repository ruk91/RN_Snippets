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
import MenuList2 from './app/views/MenuList2';
import Login from './app/views/Login';
import SignUp from './app/views/SignUp';
import Album from './app/views/Album';
import Gallery from './app/views/Gallery';
import BlogPosts from './app/views/BlogPosts';
import ProductStore from './app/views/ProductStore';
import GroupList from './app/views/GroupList';
import ContactList from './app/views/ContactList';
import PostView from './app/views/PostView';
import Profile from './app/views/Profile';
import ProfileCardView from './app/views/ProfileCardView';
import CompanyDescriptionView from './app/views/CompanyDescriptionView';
import ContactView from './app/views/ContactView';

const MainNavigator = createStackNavigator({
  SignUp: {screen: SignUp},
  Login: {screen: Login},
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
  MenuList: {screen: MenuList},
  MenuList2: { screen: MenuList2},
  Album: {screen: Album},
  Gallery: {screen: Gallery},
  BlogPosts: {screen: BlogPosts},
  ProductStore: {screen: ProductStore},
  GroupList: {screen: GroupList},
  ContactList: {screen: ContactList},
  PostView: {screen: PostView},
  Profile: {screen: Profile},
  ProfileCardView: {screen: ProfileCardView},
  CompanyDescriptionView: {screen: CompanyDescriptionView},
  ContactView: {screen: ContactView}
});

const App = createAppContainer(MainNavigator);

export default App;