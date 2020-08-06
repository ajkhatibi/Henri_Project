import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import ListItem from '../../common/ListItem.tsx';
import { getMethod, endPoints, types } from '../../actions';

const UsersScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.users.data);
    useEffect(() => {
        dispatch(getMethod(endPoints.users, types.GET_USERS))
    }, [])
    const _renderItem = ({ item }) => {
        return (
            <ListItem email={item.phone} name={item.name} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default UsersScreen;