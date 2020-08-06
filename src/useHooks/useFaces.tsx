import axios from 'axios'
import useSWR from 'swr'
import { FACES_KEY } from '../../keys';

const fetcher = url => axios.get(url, {
    headers: {
        "X-API-KEY": FACES_KEY,
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
    }
}).then(res => res.data);

export default function useFaces() {
    const { data, loader } = useSWR(`https://uifaces.co/api`, fetcher);
    let faces = [];
    if (data !== undefined) {
        console.log("FACES: ", data);
        faces = data

    }
    return {
        faces
    }
}