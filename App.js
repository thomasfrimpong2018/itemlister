

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TouchableHighlight,
  View,ListView
} from 'react-native';
import ToolBar from './app/components/ToolBar/ToolBar';



export default class App extends Component {
  constructor(){
    let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
    super();
    this.state={
      ItemSource:ds
    }
    this.pressRow=this.pressRow.bind(this);
    this.renderRow=this.renderRow.bind(this)
  }
componentDidMount(){
  this.getItems()
}

getItems(){
  let items=[{title:'item 1'},{title:"item 2"},{title:"item 3"},{title:"item 4"},{title:"item 5"}];
  this.setState({

      ItemSource:this.state.ItemSource.cloneWithRows(items)

  })

};

pressRow(){

}

renderRow(item){
  return(
    <TouchableHighlight onPress={()=>this.pressRow(item)}>
    <View style={styles.li}>
    <Text style={styles.liText}>
    {item.title}
    </Text>

    </View>
    </TouchableHighlight>
  )
}

  render() {
    return (
      <View style={styles.container}>
       <ToolBar  title="ItemLister" />
       <ListView
       dataSource={this.state.ItemSource}
       renderRow={this.renderRow}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({

    li:{
      backgroundColor:'#fff',
      borderBottomColor:"#eee",
      borderColor:"transparent",
      borderWidth:1,
      paddingLeft:15,
      paddingBottom:16,
      paddingTop:14

    },
    liText:{
      color:"#333",
      fontSize:18
    },
    ToolBar:{
      height:22,
      backgroundColor:"#fff"
    },
    listView:{
      flex:1
    },
    liContainer:{
      flex:2
    },
    container:{
      backgroundColor:"#f2f2f2",
      flex:2
    }


});
