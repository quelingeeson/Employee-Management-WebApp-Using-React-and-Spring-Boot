import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Login from './components/login';






function App(props) {
  console.log(sessionStorage.isLoggedIn);
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                       <Route path = "/" exact component = {Login}></Route>
                          {/* <Route path = "/" exact component = {ListEmployeeComponent}></Route> */}

                          

                   <Route path = "/employees" component = {sessionStorage.isLoggedIn==0 ? Login:ListEmployeeComponent} ></Route>
                   <Route path = "/add-employee/:id" component = {sessionStorage.isLoggedIn==0 ? Login:CreateEmployeeComponent}></Route>
                   <Route path = "/view-employee/:id" component = {sessionStorage.isLoggedIn==0 ? Login:ViewEmployeeComponent}></Route>
      
                         
                          {/* <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
  
  }

export default App;
