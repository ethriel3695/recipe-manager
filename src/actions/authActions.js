import axios from 'axios';
import { FETCH_USER } from './actionTypes';

export const fetchUser = () => async dispatch => {
    const res = await axios.get(`${process.env.API_HOST}/api/current_user`);
    console.log(res);
    console.log(res.data);
    dispatch({ type: FETCH_USER, payload: res.data });
};
