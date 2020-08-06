import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Todos from '../../common/Todos';
import { getMethod, endPoints, types } from '../../actions';

const TodosScreen = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.users.todos).slice(0, 10);
    useEffect(() => {
        dispatch(getMethod(endPoints.todos, types.GET_TODOS))
    }, [])
    const _renderItem = ({ item }) => {
        return (
            <Todos title={item.title} completed={item.completed} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={todos}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default TodosScreen;
