import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import useUsers from '../../useHooks/useUsers.tsx';
import ListItem from '../../common/ListItem.tsx';
import { getUsers } from '../../actions';

const UsersScreen = () => {
    const { user } = useUsers();
    const dispatch = useDispatch();
    const data = useSelector(state => state.users);

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