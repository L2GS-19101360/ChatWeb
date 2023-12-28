import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login Page/LoginPage.jsx';
import RegisterPage from './pages/Register Page/RegisterPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/LoginPage' component={LoginPage} />
      <Route path='/RegisterPage' component={RegisterPage} />
    </Router>
  </div>
)
