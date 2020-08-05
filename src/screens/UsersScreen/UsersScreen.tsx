import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useUsers from '../../useHooks/useUsers.tsx';
import ListItem from '../../common/ListItem.tsx';

const UsersScreen = () => {
    const { user } = useUsers();
    const _renderItem = ({ item }) => {
        return (
            <ListItem email={item.phone} name={item.name} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={user}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default UsersScreen;