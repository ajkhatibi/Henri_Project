import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useUsers from '../../useHooks/useUsers.tsx';
import ListItem from '../../common/ListItem.tsx';

const UsersScreen = () => {
    const { user } = useUsers();
    const _renderItem = ({ item }) => {
        console.log("user: ", item);
        return (
            <ListItem id={item.id} name={item.name} />
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={user}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default UsersScreen;