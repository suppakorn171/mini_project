import React,{Component} from 'react';
import logo from './images/Cather1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import './HeaderSection.css'


import{Link } from 'react-router-dom'


const HeaderSection = props => {

    return(
        <div>
        <div>

            <nav class="navbar navbar-expand navbar-dark bg-dark">
                
                <Col>
                </Col>
                <Col>
                <p class="text-center text-white bg-dark">{props.title}</p>
            
                </Col>
                      
                <div>
                <button type="button" class="btn btn-outline-light" onClick={() => firebase.auth().signOut()}>Sign-out</button>
                </div>
        </nav>
        </div>
       <div>
      </div>
      </div>
    )

}
export default HeaderSection;