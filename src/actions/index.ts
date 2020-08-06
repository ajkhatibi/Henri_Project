import axios from 'axios'
import { Dispatch } from 'redux';
import { FACES_KEY } from '../../keys';
import { Alert } from 'react-native';
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const endPoints = {
    users: "users/",
    todos: "todos/",
    posts: "posts/",
    comments: "comments/"
};

export enum types {
    GET_USERS = "GET_USERS",
    GET_TODOS = "GET_TODOS",
    GET_POST = "GET_POST",
    GET_COMMENT = "GET_COMMENT",
    GET_FACES = "GET_FACES"
}

export const getMethod = (url: string, type: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await instance.get(url);
        dispatch({ type, payload: data });
    } catch (error) {
        throw new Error(error);
    }
}

export const getFaces = () => async (dispatch: Dispatch) => {
    try {

        const { data } = await axios.get("https://uifaces.co/api", {
            headers: {
                "X-API-KEY": FACES_KEY,
            }
        });
        dispatch({ type: types.GET_FACES, payload: data });
    } catch (error) {
        dispatch({ type: types.GET_FACES, payload: error.response.data });
        Alert.alert("UIFACES Is Mad", "UIFace is not working right now. Please try again later.");
    }
}
