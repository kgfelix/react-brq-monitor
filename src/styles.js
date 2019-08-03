import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8E3DF"
    },
    section: {
        padding: 20,
    },
    itemContainer: {
        backgroundColor: "#7CCECD",
        borderColor: "#DDDDDD",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    itemDescription: {
        fontSize: 16,
        color: "#FFFFFF",
        marginTop: 5,
        lineHeight: 24
    },
    itemButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FFFFFF",
        backgroundColor: "#3C8DBC",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 10
    },
    itemButtonText: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center"
    },
    aboutContainer: {
        backgroundColor: "#7CCECD",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5
    }
}

)

export default styles;