import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import Login from './Login';
import { Product } from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registatation from './Registatation';
import BasicForm from './BasicForm';
import SingUpForm from './SingUpForm';
import Emp from './Emp';
import EmpWithYup from './EmpWithYup';
import MyExample from './MyExample';
import MyForm from './MyForm';
import FullFormFunction from './FullFormFunction';
import MyButton from './MyButton';
import MyDisplay from './MyDisplay';
import TokenLogin from './TokenLogin';
import Accounts from './Accounts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Master from './Master';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
