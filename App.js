
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  StatusBar
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }
  }

  renderItem = ({ item }) =>{
    return(
      <View style={styles.itemView}>
      <Image style = {styles.poster}
      source = {{ uri: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + item.poster_path }}/>
      <View style={styles.viewText}>
        <Text>
          {item.id}
        </Text>
        <Text>
          {item.title}
        </Text>
      </View>
    </View>
    )
  }

  async componentDidMount(){
   const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ebe8b65ae09a2a517ffd680266f90891'

  await fetch(url)
   .then((response) => response.json())
   .then((responseJson) => {
     this.setState({
       data: responseJson.results
     })
   })
 }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ff4757" barStyle="light-content" />
        <View style={styles.appBar}>
        <Text style={styles.textAppbar}>Movie Apps</Text>
      </View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
        />
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  appBar:{
    backgroundColor: '#ff4757',
    height: 50,
  },
  textAppbar:{
    textAlign: 'center',
    color: '#FFFF',
    fontSize: 20,
  },
  itemView:{
    flex:1,
    flexDirection: 'row',
    marginBottom: 3,
  },
  poster:{
    width: 150,
    height: 200,
    margin:5 
  },
  viewText:{
    flex:1,
    justifyContent:'center',
  }
});

