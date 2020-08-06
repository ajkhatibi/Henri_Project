import axios from 'axios'
import { Dispatch } from 'redux';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export enum types {
    GET_USERS = "GET_USERS",
    GET_TODOS = "GET_TODOS",
    GET_POST = "GET_POST",
    GET_COMMENT = "GET_COMMENT"
}

export const getUsers = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await instance.get("users/");
        // const resp = await axios.get("https://uifaces.co/api", {
        //     headers: {
        //         "X-API-KEY": FACES_KEY,
        //         'Accept': 'application/json',
        //         'Cache-Control': 'no-cache'
        //     }
        // })
        dispatch({ type: types.GET_USERS, payload: data });
    } catch (error) {
        console.log("ERROR, ", error.response)
    }
}

export const getTodos = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await instance.get("todos/");
        const newArray = data.slice(0, 10);
        dispatch({ type: types.GET_TODOS, payload: newArray });
    } catch (error) {
        throw new Error(error)
    }
}

export const getPost = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await instance.get("posts/");
        const newArray = data.slice(0, 10);
        dispatch({ type: types.GET_POST, payload: newArray });
    } catch (error) {
        throw new Error(error);
    }
}

export const getComment = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await instance.get("comments/");
        const newArray = data.slice(0, 10);
        console.log("getComment, ", newArray)

        dispatch({ type: types.GET_COMMENT, payload: newArray });
    } catch (error) {
        throw new Error(error);
    }
}