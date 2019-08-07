import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class About extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.bug.id,
    headerStyle: {
      backgroundColor: '#3C8DBC',
    },
    headerTintColor: "#FFF",
    headerTintStyle: {
      fontWeight: "bold"
    },
    headerRight: (                                     
        <Icon.Button name="plus-square" 
                      backgroundColor="transparent" 
                      color="#FFFFFF" 
                      onPress={ () => navigation.navigate('Comentario',{bugId: navigation.state.params.bug._id})                      
                      }>
            <Text style={{fontSize: 20}}></Text>
        </Icon.Button>                                                                     
      ),
  });


  render() {

    const { bug } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.aboutContainer}>
          <Text style={styles.itemDescription}> Dominio: {bug.dominio} </Text>
          <Text style={styles.itemDescription}> QA Projeto: {bug.qaProjeto} </Text>
          <Text style={styles.itemDescription}> Projeto: {bug.projeto} </Text>
          <Text style={styles.itemDescription}> Status: {bug.status} </Text>
          <Text style={styles.itemDescription}> Responsável: {bug.responsible} </Text>
          <Text style={styles.itemDescription}> Ambiente: {bug.environmentType} </Text>
          <Text style={styles.itemDescription}> Prioridade: {bug.priority} </Text>
          <Text style={styles.itemDescription}> Severidade: {bug.severity} </Text>
          <Text style={styles.itemDescription}> Sistema: {bug.sistemaCorrecao} </Text>
        </View>
      </View>
    )
  }

}