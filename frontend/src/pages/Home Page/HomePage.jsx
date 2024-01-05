import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import weblogo from '../../assets/weblogo.jpg';
import LetteredAvatar from '../../components/LetterAvatar';

class HomePage extends Component {
    constructor() {
        super();
        const userDataJSON = sessionStorage.getItem('userData');
        const userData = userDataJSON ? JSON.parse(userDataJSON) : null;
        this.state = {
            userData: userData
        };
    }

    componentDidMount() {
        console.log(this.state.userData);
    }

    componentWillUnmount() {
        // Add any cleanup code if needed
        sessionStorage.removeItem('userData');
        window.location.href = "/";
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
                        <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <LetteredAvatar name={`${this.state.userData.firstname} ${this.state.userData.lastname}`} size={63} />
                        </div>
                    </div>
                </nav>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <button type="button" className="btn btn-danger" onClick={this.componentWillUnmount}>Logout Account</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
