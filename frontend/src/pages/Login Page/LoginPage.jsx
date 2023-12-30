import { Component, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './LoginPage.css'
import webname from '../../assets/webname.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            showPassword: false,

            enterUserEmail: "",
            enterPassword: ""
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
        this.props.history.push('/');
    }

    handleLoginAccount = async (event) => {
        event.preventDefault();

        console.log(this.state.enterUserEmail);
        console.log(this.state.enterPassword);


    }

    render() {
        const eyeIcon = this.state.showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
        const inputType = this.state.showPassword ? "text" : "password";

        return (
            <div>
                <div id='loginBox'>
                    <div className='leftLogin'>
                        <img src={webname} alt="" id='webnameLogin' onClick={this.toApp} style={{cursor: 'pointer'}}/>
                    </div>
                    <div className='rightLogin'>
                        <h1 style={{marginBottom: '25px'}}>Login Page</h1>
                        <form action="" method='POST'>
                            <input className="form-control" type="text" placeholder="Enter Email or Username" aria-label="default input example" style={{marginBottom: '25px'}} value={this.state.enterUserEmail} onChange={(e) => this.setState({enterUserEmail: e.target.value})}/>
                            <div className='input-group'>
                                <input className='form-control' type={inputType} placeholder='Enter Password' aria-label='Password' style={{marginBottom: '25px'}} value={this.state.enterPassword} onChange={(e) => this.setState({enterPassword: e.target.value})}/>
                                <span className='input-group-text' style={{marginBottom: '25px'}}>
                                    <i className={eyeIcon} onClick={this.togglePassword}></i>
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{marginBottom: '60px'}} onClick={thishandleLoginAccount}>Login Account</button>
                        </form>
                        <p>Don't Have an Account? <Link to='/RegisterPage'>Register an Account</Link> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage