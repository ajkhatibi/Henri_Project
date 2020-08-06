import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import ListItem from '../../common/ListItem.tsx';
import { getMethod, endPoints, types, getFaces } from '../../actions';
import { DATA } from '../../reducers/usersReducers';
import { STORE } from '../../reducers';

const UsersScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: STORE) => state.users.data);
    useEffect(() => {
        dispatch(getFaces())
        dispatch(getMethod(endPoints.users, types.GET_USERS))
    }, [])
    const _renderItem = ({ item, index }: { item: DATA, index: number }) => {
        return (
            <ListItem index={index} email={item.phone} name={item.name} />
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