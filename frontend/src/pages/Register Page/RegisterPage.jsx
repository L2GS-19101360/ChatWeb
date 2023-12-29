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
            showPassword: false,

            newFirstName: "",
            newLastName: "",
            newContactNumber: "",
            newUsername: "",
            newEmail: "",
            newPassword: "",
            tempImage: "#%&{}>"
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
    toApp() {
        this.props.history.push('/')
    }

    handleRegisterAccount = (event) => {
        event.preventDefault()

        console.log(this.state.newFirstName);
        console.log(this.state.newLastName);
        console.log(this.state.newUsername);
        console.log(this.state.newContactNumber);
        console.log(this.state.newEmail);
        console.log(this.state.newPassword);
        console.log(this.state.tempImage);

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
                        <h1 style={{ marginBottom: '10px' }}>Register Page</h1>

                        <form action="" method="post">

                            <div className='infoName' style={{ marginBottom: '10px' }}>
                                <input className="form-control" type="text" placeholder="Enter First Name" aria-label="default input example" style={{ marginRight: '5px' }} value={this.state.newFirstName} onChange={(e) => this.setState({ newFirstName: e.target.value })} />

                                <input className="form-control" type="text" placeholder="Enter Last Name" aria-label="default input example" style={{ marginLeft: '5px' }} value={this.state.newLastName} onChange={(e) => this.setState({newLastName: e.target.value})}/>
                            </div>
                            <input className="form-control" type="tel" placeholder="Enter Contact Number" aria-label="default input example" style={{ marginBottom: '10px' }} value={this.state.newContactNumber} onChange={(e) => this.setState({newContactNumber: e.target.value})}/>

                            <input className="form-control" type="text" placeholder="Enter Username" aria-label="default input example" style={{ marginBottom: '10px' }} value={this.state.newUsername} onChange={(e) => this.setState({newUsername: e.target.value})}/>

                            <input className="form-control" type="email" placeholder="Enter Email" aria-label="default input example" style={{ marginBottom: '10px' }} value={this.state.newEmail} onChange={(e) => this.setState({newEmail: e.target.value})}/>

                            <div className='input-group'>
                                <input className='form-control' type={inputType} placeholder='Enter Password' aria-label='Password' style={{ marginBottom: '20px' }} value={this.state.newPassword} onChange={(e) => this.setState({newPassword: e.target.value})}/>
                                <span className='input-group-text' style={{ marginBottom: '20px' }}>
                                    <i className={eyeIcon} onClick={this.togglePassword}></i>
                                </span>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={this.handleRegisterAccount}>Register Account</button>

                        </form>

                        <p style={{marginTop: '15px'}}>Already Have an Account? <Link to='/LoginPage'>Login Account</Link> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage