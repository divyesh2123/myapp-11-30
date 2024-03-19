import axios from 'axios';

let token = JSON.parse(localStorage.getItem("tokennew"));
const authFetch = axios.create({
  baseURL: ' https://real-pear-fly-kilt.cyclic.app',
  headers: {
    Accept: 'application/json',
    Authorization : `bearer ${token.jwtToken}`
  },
});

export default authFetch;