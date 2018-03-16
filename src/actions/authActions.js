import axios from 'axios';
import { FETCH_USER } from './actionTypes';

// const API_URL = encodeURI('https://boiling-shore-39277.herokuapp.com');
const API_URL = encodeURI('http://localhost:3030');

export const fetchUser = () => async dispatch => {
    const res = await axios.get(`${API_URL}/api/current_user`, axios.defaults.withCredentials = true);
    console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data });
};
