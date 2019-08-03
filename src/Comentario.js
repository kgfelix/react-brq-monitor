import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

export default class Comentario extends Component {

    static navigationOptions = {
        title: 'Adicionar Comentário',
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
                <Text> Comentário </Text>
            </View>
        )
    }

}