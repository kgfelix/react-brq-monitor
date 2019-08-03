import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import api from './services/apis';
import { objectMethod, isMetaProperty } from '@babel/types';

export default class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#3C8DBC',
        },
        headerTintColor: "#FFF",
        headerTintStyle: {
            fontWeight: "bold"
        }
    }

    state = {
        bugs: [],
    };

    componentDidMount() {
        this.loadBugs();
    }

    loadBugs = async () => {
        const response = await api.get('/monitor-bugs');
        const { bugs } = response.data;

        this.setState({ bugs });
        console.log(bugs);
    };

    renderItem = ({ item }) => (
        <View>
            <Text> {item.id} </Text>
            <Text> {item.qaProjeto} </Text>

            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('About')
                }}>
                <Text> Ir para About </Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.bugs}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem} />
            </View>
        )
    }
}