import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import ListItem from '../../common/ListItem.tsx';
import { getMethod, endPoints, types, getFaces } from '../../actions';
import { getAdjustedDataArray } from './selectors';
import { DATA } from '../../reducers/usersReducers';

const UsersScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => getAdjustedDataArray(state));
    const photo = useSelector(state => state.users.faces)
    useEffect(() => {
        dispatch(getFaces())
        dispatch(getMethod(endPoints.users, types.GET_USERS))
    }, [])
    useEffect(() => {
        console.log("UIFACES: ", photo);
    }, [photo])
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