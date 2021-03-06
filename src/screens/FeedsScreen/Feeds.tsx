import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Feeds = ({ comment, body, title }: { comment: object, body: string, title: string }) => {
    const [showComments, setShowComments] = useState(false);
    const renderComments = () => {
        if (showComments) {
            return (
                <View>
                    {comment !== undefined ? (
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>From: {comment.name}</Text>
                            <Text>{comment.body}</Text>
                        </View>
                    ) : <Text>no comments to show</Text>}
                </View>
            )
        } else {
            return (
                null
            )
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{body}</Text>
            <Button
                onPress={() => setShowComments((state) => !state)}
                title={`${showComments ? "Hide" : "Show"} comment(s)`} />
            {renderComments()}
        </View>
    )
}

export default Feeds;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    title: {
        fontWeight: 'bold'
    }
})