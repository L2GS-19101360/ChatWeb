import { Component, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './RegisterPage.css'
import webname from '../../assets/webname.jpg'

class RegisterPage extends Component {
    constructor() {
        super();

    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div id='registerBox'>
                    <div className='leftRegister'>
                        <img src={webname} alt="" id='webnameLogin' onClick={this.toApp} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className='rightRegister'>
                        <h1>Register Page</h1>
                        <div className='infoName'>
                            <input class="form-control" type="text" placeholder="Enter First Name" aria-label="default input example" style={{marginRight: '5px'}}/>
                            <input class="form-control" type="text" placeholder="Enter Last Name" aria-label="default input example" style={{marginLeft: '5px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage