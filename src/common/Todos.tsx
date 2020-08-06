import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const Todos = ({ title, completed }: { title: string, completed: boolean }) => {
    const [check, setCheck] = useState(completed);
    const name = check ? "checkbox-active" : "checkbox-passive";
    const color = check ? "green" : "black"
    return (
        <TouchableOpacity onPress={() => setCheck((state) => !state)} style={styles.container}>
            <Icon name={name} color={color} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Todos;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        height: "10%",
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 10
    }
})