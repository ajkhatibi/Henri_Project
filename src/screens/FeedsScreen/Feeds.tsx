import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Feeds = ({ comment, body, title }: { comment: object, body: string, title: string }) => {
    const [showComments, setShowComments] = useState(false);
    const renderComments = () => {
        if (showComments) {
            return (
                <View>
                    {<Text>{comment !== undefined ? comment.body : "no comments to show"}</Text>}
                </View>
            )
        } else {
            return (
                null
            )
        }
    }
    return (
        <View>
            <Text>{title}</Text>
            <Button onPress={() => setShowComments((state) => !state)} title={"show comment(s)"} />
            {renderComments()}
        </View>
    )
}

export default Feeds;
