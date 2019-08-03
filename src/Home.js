import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import api from './services/apis';
import styles from './styles'

export default class Home extends Component {

    static navigationOptions = {
        title: 'BRQ Monitor',
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
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}> {item.id} </Text>
            <Text style={styles.itemDescription}> {item.qaProjeto} </Text>

            <TouchableOpacity 
                style={styles.itemButton}
                onPress={() => {
                    this.props.navigation.navigate('About', {bug: item})
                }}>
                <Text style={styles.itemButtonText}> Detalhes </Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.section}
                    data={this.state.bugs}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem} />
            </View>
        )
    }
}