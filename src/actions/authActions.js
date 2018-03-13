import axios from 'axios';
import { FETCH_USER } from './actionTypes';

const API_URL = encodeURI('https://boiling-shore-39277.herokuapp.com');

export const fetchUser = () => async dispatch => {
    const res = await axios.get(`${API_URL}/api/current_user`);
    console.log(res);
    console.log(API_URL);
    dispatch({ type: FETCH_USER, payload: res.data });
};
