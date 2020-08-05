import React from 'react';
import { View, Text } from 'react-native';

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

export default ListItem = ({ name }: Props) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}