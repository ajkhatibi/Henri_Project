import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Todos from '../../common/Todos';
import { getTodos } from '../../actions';

const TodosScreen = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.users.todos)
    console.log("TODOS: ", todos);
    useEffect(() => {
        dispatch(getTodos());
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
