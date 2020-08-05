import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export default ListItem = ({ name, email }: Props) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text>{email}</Text>
                </View>
                <Icon name="phone" color="green" size={30} />
            </View>
            <View style={styles.divider} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    name: {
        fontWeight: 'bold'
    },
    divider: {
        width: '100%',
        backgroundColor: '#D3D3D3',
        height: StyleSheet.hairlineWidth
    }
})