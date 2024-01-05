import { Component, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import weblogo from '../../assets/weblogo.jpg'
import LetteredAvatar from '../../components/LetterAvatar';

class HomePage extends Component {

    constructor() {
        super();

        const userDataJSON = sessionStorage.getItem('userData');
        const userData = userDataJSON ? JSON.parse(userDataJSON) : null;

        this.state = {
            userData: userData
        }
    }

    componentDidMount() {
        console.log(this.state.userData);
    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={weblogo} alt="" height={63} width={63} /> ChatWeb
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <LetteredAvatar name={`${this.state.userData.firstname} ${this.state.userData.lastname}`} size={63}/>  
                    </div>
                </nav>
            </div>
        );
    }

}

export default HomePage