import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { getPost, getComment } from '../../actions';
import { postWithComments } from './selectors';
import Feeds from './Feeds';

const FeedsScreen = () => {
    const dispatch = useDispatch();
    const feed = useSelector((state) => postWithComments(state));

    useEffect(() => {
        dispatch(getPost());
        dispatch(getComment());
    }, []);
    const _renderItem = ({ item }) => {
        return (
            <Feeds body={item.body} comment={item.comments} title={item.title} />
        )
    }
    console.log("FEED: ", feed);
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