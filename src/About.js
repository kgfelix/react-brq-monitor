import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class About extends Component {
  static navigationOptions = {
    title: 'Sobre',
    headerStyle: {
      backgroundColor: '#3C8DBC',
    },
    headerTintColor: "#FFF",
    headerTintStyle: {
      fontWeight: "bold"
    }
  }

  render() {
    return (
      <View>
        <Text> Sobre </Text>
      </View>
    )
  }

}