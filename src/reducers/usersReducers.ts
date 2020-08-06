import { types } from '../actions/index';

export interface DATA {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

interface TODOS {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface COMMENTS {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface POST {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface State {
    data: DATA[];
    todos: TODOS[];
    comments: COMMENTS[];
    posts: POST[]
}


const INITIAL_STATE: State = {
    data: [],
    todos: [],
    comments: [],
    posts: []
}

type Actions = {
    type: types.GET_USERS,
    payload: DATA[]
} | { type: types.GET_TODOS, payload: TODOS[] } | { type: types.GET_COMMENT, payload: COMMENTS[] } | { type: types.GET_POST, payload: POST[] }

export default (state = INITIAL_STATE, action: Actions) => {

    switch (action.type) {
        case types.GET_USERS:
            return { ...state, data: action.payload };
        case types.GET_TODOS:
            return { ...state, todos: action.payload };
        case types.GET_COMMENT:
            return { ...state, comments: action.payload };
        case types.GET_POST:
            return { ...state, posts: action.payload };
        default:
            return state;

    }
}