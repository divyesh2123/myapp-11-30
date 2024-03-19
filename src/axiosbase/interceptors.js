import axios from "axios";
import { toast } from "react-toastify";

const authFetch = axios.create( {
baseURL : "https://real-pear-fly-kilt.cyclic.app"
     
})



  
  authFetch.interceptors.request.use(
    (request) => {

      var myToken = JSON.parse(localStorage.getItem("tokennew"));
      request.headers['Accept'] = 'application/json';
      request.headers['Authorization'] = `bearer ${myToken.jwtToken}`
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authFetch.interceptors.response.use(
    (response) => {


    
     // toast(response.message)

      console.log(response);
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authFetch;