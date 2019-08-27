import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Notifications",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:124.711},
        {id:2,  name: "ImageGrid",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:2,  name: "ImageGrid2",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:3,  name: "ToDoList",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723} ,
        {id:4,  name: "ModalDetail",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573} ,
        {id:5,  name: "WhatsappCall",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
        {id:1,  name: "WhatsappCallList",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:124.711},
        {id:2,  name: "ProductView",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:2,  name: "ChatView",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:3,  name: "FlatListGrid",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723} ,
        {id:4,  name: "UserList",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573} ,
        {id:5,  name: "EcommerceProduct",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
        {id:2,  name: "MenuList",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:2,  name: "MenuList2",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:3,  name: "SignUp",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723} ,
        {id:4,  name: "Login",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573} ,
        {id:5,  name: "Album",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
        {id:5,  name: "Gallery",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
        {id:2,  name: "BlogPosts",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:2,  name: "ProductStore",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:3,  name: "GroupList",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723} ,
        {id:4,  name: "ContactList",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573} ,
        {id:5,  name: "PostView",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
      ]
    };
  }

  clickEventListener = (item) => {
    this.props.navigation.navigate(item.name)
    // Alert.alert('Message', 'Item clicked. '+item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
});  