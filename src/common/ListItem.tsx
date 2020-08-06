import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import { STORE } from '../../reducers';

interface Props {
    name: string;
    email: string;
    index: number;
}

const ListItem = ({ name, email, index }: Props) => {
    const photo = useSelector((state: STORE) => state.users.faces)
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={styles.container}>
                {photo.length > 0 ? <Image source={{ uri: photo[index].photo }} style={styles.image} /> : <ActivityIndicator />}
                <View style={{ width: '70%' }}>
                    <Text style={styles.name}>{name}</Text>
                    <Text>{email}</Text>
                </View>
                <View style={{ width: "10%" }}>
                    <Icon name="phone" color="green" size={30} />

                </View>
            </View>
            <View style={styles.divider} />
        </View>

    )
}

export default ListItem;

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
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    }
})