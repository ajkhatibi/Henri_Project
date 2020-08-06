import axios from 'axios'
import { FACES_KEY } from '../../keys';

const fetcher = url => axios.get(url).then(res => res.data);

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        // const resp = await axios.get("https://uifaces.co/api", {
        //     headers: {
        //         "X-API-KEY": FACES_KEY,
        //         'Accept': 'application/json',
        //         'Cache-Control': 'no-cache'
        //     }
        // })
        console.log("DATA 2: ", data);
        dispatch({ type: "GET_USERS", payload: data });
    } catch (error) {
        console.log("ERROR, ", error.response)
    }
}