import { Component, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './RegisterPage.css'
import webname from '../../assets/webname.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'

class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            showPassword: false
        }
        this.toApp = this.toApp.bind(this);
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    togglePassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword
        }));
    }
    toApp(){
        this.props.history.push('/')
    }

    render() {
        const eyeIcon = this.state.showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
        const inputType = this.state.showPassword ? "text" : "password";

        return (
            <div>
                <div id='registerBox'>
                    <div className='leftRegister'>
                        <img src={webname} alt="" id='webnameLogin' onClick={this.toApp} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className='rightRegister'>
                        <h1 style={{marginBottom: '20px'}}>Register Page</h1>
                        <div className='infoName' style={{marginBottom: '20px'}}>
                            <input className="form-control" type="text" placeholder="Enter First Name" aria-label="default input example" style={{ marginRight: '5px' }} />
                            <input className="form-control" type="text" placeholder="Enter Last Name" aria-label="default input example" style={{ marginLeft: '5px' }} />
                        </div>
                        <input className="form-control" type="tel" placeholder="Enter Contact Number" aria-label="default input example" style={{marginBottom: '20px'}} />
                        <input className="form-control" type="text" placeholder="Enter Username" aria-label="default input example" style={{marginBottom: '20px'}} />
                        <input className="form-control" type="email" placeholder="Enter Email" aria-label="default input example" style={{marginBottom: '20px'}} />
                        <div className='input-group'>
                            <input className='form-control' type={inputType} placeholder='Enter Password' aria-label='Password' style={{ marginBottom: '25px' }} />
                            <span className='input-group-text' style={{ marginBottom: '25px' }}>
                                <i className={eyeIcon} onClick={this.togglePassword}></i>
                            </span>
                        </div>
                        <p>Already Have an Account? <Link to='/LoginPage'>Login Account</Link> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage