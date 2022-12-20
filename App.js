import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Biscoito</Text>
      </View>
    )
  }
}

export default App;