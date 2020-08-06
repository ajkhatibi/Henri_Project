import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import { DATA as Props } from '../reducers/usersReducers';
import useFaces from '../useHooks/useFaces';

export default ListItem = ({ name, email, index }: Props) => {
    const photo = useSelector(state => state.users.faces)
    console.log("LIST ITEM COMP: photo", photo[index]);
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={styles.container}>
                {photo.length > 0 ? <Image source={{ uri: photo[index].photo }} style={{ height: 50, width: 50, borderRadius: 25 }} /> : <ActivityIndicator />}
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