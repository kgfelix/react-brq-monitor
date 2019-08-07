import React, { Component } from 'react'
import { View, Button } from 'react-native'
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import api from './services/apis';

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

    state = { autor: '', msg: ''};

    handleAutorChange = (autor) => {
        this.setState( { autor});
    };

    handleMsgChange = (msg) => {
        this.setState( { msg });
    };

    handlePostPress = async () => {
      try {
          const response = await api.post('/comments', {
              autor: this.state.autor,
              msg: this.state.msg,
          });
          
          const comment = response.data;
          console.log(comment);
          
      } catch (error) {
          console.log("Erro.....");
          console.log(error);
      }


        console.log( this.state.autor );
        console.log( this.state.msg );
    };

    render() {

        return (
            <View>
                 <TextInput 
                    placeholder="Autor" 
                    value={this.state.autor}
                    onChangeText={this.handleAutorChange}
                    autoCapitalize="none"
                    autoCorrect={false} />

                <TextInput 
                    placeholder="Comentário" 
                    value={this.state.msg}
                    onChangeText={this.handleMsgChange}
                    autoCapitalize="none"
                    autoCorrect={false} />

                <Button onPress={this.handlePostPress} 
                    title="Salvar" />
            </View>
        )
    }

}