import axios from "axios";
import { MyUserFail, MyUserRequest, MyUserSuc } from "../action/myuseraction";

const getUser = () => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
      dispatch(MyUserRequest());
      // Return promise with success and failure actions
      return axios.get('https://jsonplaceholder.typicode.com/users').then(  
        y => dispatch(MyUserSuc(y)),
        err => dispatch(MyUserFail(err))
      );
    };
  };

  export default getUser;