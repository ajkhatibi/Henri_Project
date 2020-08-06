import axios from 'axios'
import useSWR from 'swr'
import { FACES_KEY } from '../../keys';

const fetcher = url => axios.get(url, {
    headers: {
        "X-API-KEY": FACES_KEY
    }
}).then(res => res.data);

export default function useFaces() {
    // const { data } = useSWR('https://uifaces.co/api', fetcher);
    let data = [];
    let faces = [];
    if (data !== undefined && data.length > 0) {
        faces = data
    }
    return {
        faces
    }
}