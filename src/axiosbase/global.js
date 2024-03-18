import axios from 'axios';

let token = JSON.parse(localStorage.getItem("tokennew"));
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `bearer ${token.jwtToken}`