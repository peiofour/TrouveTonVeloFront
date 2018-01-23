import React, { Component } from 'react';
import './Header.css';
import logoImg from './logoVelo.jpg'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <header>
                    <img className="Header-logo" src={logoImg} alt="TrouveTonVelo"/>
                    <h1 className="Header-title">TrouveTonVelo</h1>
                </header>
            </div>
        );
    }
}

export default Header;
