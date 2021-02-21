import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

      
        
    }
   
    
    render() {

        
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div>
                    
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
