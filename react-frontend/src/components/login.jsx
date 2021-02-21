
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import EmployeeService from '../services/EmployeeService';
import { render } from '@testing-library/react';
import ListEmployeeComponent from "./ListEmployeeComponent";



class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    loginHandler=(e)=>{
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
        console.log('user => ' + JSON.stringify(user));
        EmployeeService.loginEmployee(user).then(
            (res)=>{
                if(res.data)
                {
                    this.props.history.push('/employees');
                    sessionStorage.isLoggedIn=1;
                     window.location.reload(false);
                }
                else{
                    alert("incorrect detils");
                    this.props.history.push('/');
                }
               
            }
        )

    }

    responseGoogle=(response)=>{
        if(response.tokenId){
            sessionStorage.isLoggedIn=1;
            this.props.history.push('/employees');
            window.location.reload(false);
            console.log( sessionStorage.isLoggedIn);
        }
    }

    render() { 
        return ( <div >
            <h2>Either Login with google or with registered username and password to view details the employee details</h2>
            <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Username: </label>
                                            <input placeholder="username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.loginHandler} >Login</button>
                                       
                                    </form>
                                </div>
            <GoogleLogin
    clientId="722424117173-rdks1b74ogsn0c68gactcjo4g8qoa3sg.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </div> );
    }
}
 
export default Login;
  
 
