import { Component, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import webname from '../src/assets/webname.jpg'

class App extends Component {
  constructor() {
    super();
    this.tologinPage = this.tologinPage.bind(this);
    this.toregisterPage = this.toregisterPage.bind(this);
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  tologinPage(){
    this.props.history.push('LoginPage');
  }
  toregisterPage(){
    this.props.history.push('RegisterPage');
  }

  render() {
    return (
      <div>
        <div id='introBox'>
          <img src={webname} alt="" id='webnameApp' /><br/>
          <button type="button" className="btn btn-secondary" style={{marginRight: '10px'}} onClick={this.tologinPage}>Login Account</button>
          <button type="button" className="btn btn-primary" style={{marginLeft: '10px'}} onClick={this.toregisterPage}>Register Account</button>
        </div>
      </div>
    );
  }
}

export default App
