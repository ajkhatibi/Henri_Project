import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { getMethod, endPoints, types } from '../../actions';
import { postWithComments } from './selectors';
import Feeds from './Feeds';
import { STORE } from '../../reducers';

const FeedsScreen = () => {
    const dispatch = useDispatch();
    const feed = useSelector((state: STORE) => postWithComments(state));

    useEffect(() => {
        dispatch(getMethod(endPoints.posts, types.GET_POST));
        dispatch(getMethod(endPoints.comments, types.GET_COMMENT));
    }, []);
    const _renderItem = ({ item }) => {
        return (
            <Feeds body={item.body} comment={item.comments} title={item.title} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={feed}
                keyExtractor={(item) => item.id.toString()}
                renderItem={_renderItem}
            />
        </View>
    )
}

export default FeedsScreen;