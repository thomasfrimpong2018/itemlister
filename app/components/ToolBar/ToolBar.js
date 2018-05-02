

import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';




export default class ToolBar extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
    backgroundColor='coral'
    barStyle="light-content"
      />
       <View style={styles.navbar}>
       <Text style={styles.navbarTitle}>
       {this.props.title}
       </Text>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    alignItems:'center',
    backgroundColor:'#fff',
    borderBottomColor:'#eee',
    borderColor:"transparent",
    borderWidth:1,
    justifyContent:'center',
    height:44,
    flexDirection:'row'
  },
  navbarTitle:{
    color:"#444",
    fontSize:18,
    fontWeight:'500'
  }
});
