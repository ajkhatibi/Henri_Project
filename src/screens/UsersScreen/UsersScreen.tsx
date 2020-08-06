import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import ListItem from '../../common/ListItem.tsx';
import { getMethod, endPoints, types, getFaces } from '../../actions';
import { getAdjustedDataArray } from './selectors';

const UsersScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => getAdjustedDataArray(state));
    useEffect(() => {
        dispatch(getMethod(endPoints.users, types.GET_USERS))
        dispatch(getFaces())
    }, [])
    const _renderItem = ({ item }) => {
        return (
            <ListItem email={item.phone} name={item.name} />
        )
    }
    console.log("DATA SET: ", data);
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